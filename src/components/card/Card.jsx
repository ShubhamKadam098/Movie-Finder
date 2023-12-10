import { useEffect, useState } from "react";

const Card = ({ movieDetails }) => {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(4.5);

  useEffect(() => {
    console.log(movieDetails);
  }, []);

  return (
    <div className="max-w-xs  border  rounded-lg shadow bg-gray-800 border-gray-700 hover:scale-105 hover:ease-in-out hover:duration-150">
      <a href="#">
        <img
          className="rounded-t-lg"
          src={`${import.meta.env.VITE_IMG_URL + movieDetails.poster_path}`}
          alt=""
        />
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-white">
            {movieDetails.original_title}
          </h5>
        </a>
        <div className="">
          <p className="text-gray-300">
            {movieDetails.release_date.slice(0, 4)}
          </p>
          <div className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white  rounded-lg  focus:ring-4 focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-yellow-600">
            {movieDetails.vote_average} / 10.0
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
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
  );
};

export default Card;
