import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ movieDetails }) => {
  const [rating, setRating] = useState(4.5);
  const [loading, setLoading] = useState(true); // New loading state

  useEffect(() => {
    setLoading(true); // Set loading to true when movieDetails change
    console.log(movieDetails);
    // Simulating delay to show skeleton loading
    const timeout = setTimeout(() => {
      setLoading(false); // Set loading to false after a delay (simulating data loading)
    }, 1000); // Adjust this delay as needed
    return () => clearTimeout(timeout);
  }, [movieDetails]);

  if (!movieDetails) {
    return null;
  }

  const { id, poster_path, original_title, release_date, vote_average } =
    movieDetails;

  const imgSrc = poster_path
    ? `${import.meta.env.VITE_IMG_URL}${poster_path}`
    : "https://via.placeholder.com/150";

  return (
    <Link to={`/details/${id}`}>
      <div className="aspect-[2/4] max-w-xs border rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-105 hover:ease-in-out hover:duration-150 overflow-hidden">
        {loading ? ( // Check loading state to render skeleton or image
          <div
            className="animate-pulse bg-gray-600 rounded-t-lg"
            style={{ height: "300px" }}
          />
        ) : (
          <img className="rounded-t-lg" src={imgSrc} alt={original_title} />
        )}
        <div className="p-3 flex flex-col gap-2">
          <div className="max-h-12 overflow-hidden">
            <h5 className="text-[0.9rem] font-semibold tracking-tight text-white overflow-hidden whitespace-nowrap overflow-ellipsis">
              {original_title}
            </h5>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-gray-300 text-[0.85rem]">
              {release_date?.slice(0, 4)}
            </p>
            <div className="inline-flex items-center px-1 py-0.5 text-[0.75rem] font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-600">
              {vote_average}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

Card.propTypes = {
  movieDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster_path: PropTypes.string,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string,
    vote_average: PropTypes.number.isRequired,
  }),
};

Card.defaultProps = {
  movieDetails: null,
};

export default Card;
