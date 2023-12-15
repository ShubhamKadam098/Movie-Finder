import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SimilarCard = ({ id }) => {
  const [similarMovie, setSimilarMovie] = useState({});

  async function getSimilarMovies() {
    try {
      const apiQuery = `${
        import.meta.env.VITE_BASE_URL
      }movie/${id}/similar?language=en-U${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(apiQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setSimilarMovie(data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  useEffect(() => {
    if (id) {
      getSimilarMovies();
    }
  }, [id]);

  return (
    <div className=" rounded-lg drop-shadow-2xl ">
      <h1 className="text-yellow-400 font-bold text-lg mb-4">Similar</h1>
      <div className="grid grid-cols-3 gap-4">
        {/* card */}
        {similarMovie.results
          ? similarMovie.results.map((movie) =>
              movie.poster_path ? (
                <Link
                  key={movie.id}
                  to={`/details/${movie.id}`}
                  className="flex flex-col items-center h-24 p-2 overflow-hidden border rounded-lg shadow md:flex-row border-gray-800 bg-gray-700 hover:bg-gray-600 relative"
                >
                  {/* Skeleton placeholder */}
                  <div className="h-full aspect-[2/3] bg-gray-400 animate-pulse rounded-lg absolute "></div>

                  <img
                    className="object-cover max-h-full rounded-lg md:h-auto md:rounded-lg opacity-0"
                    src={`${import.meta.env.VITE_IMG_URL}${movie.poster_path}`}
                    alt=""
                    onLoad={(e) => {
                      e.target.classList.remove("opacity-0");
                      e.target.previousElementSibling.classList.add("hidden");
                    }}
                    onError={(e) => {
                      e.target.src = "your-fallback-image-url";
                    }}
                  />
                  <div className="flex flex-col justify-between p-4 leading-normal grow">
                    <h5 className="mb-2 text-sm font-semibold tracking-tight text-slate-300">
                      {movie.title}
                    </h5>
                    <p className="mb-3 font text-gray-400">
                      {movie.release_date.slice(0, 4)}
                    </p>
                  </div>
                </Link>
              ) : null
            )
          : null}
      </div>
    </div>
  );
};

export default SimilarCard;
