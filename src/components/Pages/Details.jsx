import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import StarRating from "../StarRating";

const Details = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({ backdrop_path: "" });

  const [similarMovie, setSimilarMovie] = useState({});

  async function getMovieDetails() {
    try {
      const apiQuery = `${
        import.meta.env.VITE_BASE_URL
      }movie/${id}?language=en-U${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(apiQuery);
      console.log(apiQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setMovieDetails(data);
      console.log(data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  async function getSimilarMovies() {
    try {
      const apiQuery = `${
        import.meta.env.VITE_BASE_URL
      }movie/${id}/similar?language=en-U${import.meta.env.VITE_API_KEY}`;
      const response = await fetch(apiQuery);
      console.log(apiQuery);
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setSimilarMovie(data);
      console.log(data);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  useEffect(() => {
    getMovieDetails();
    getSimilarMovies();
  }, [id]);

  return (
    <>
      {/* Backdrop */}
      <div className="w-full aspect-video my-10 relative border-slate-400 border rounded-xl overflow-hidden drop-shadow-2xl">
        {movieDetails.backdrop_path != "" ? (
          <>
            <div
              className="absolute inset-0 bg-center  bg-cover"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/w1280${movieDetails.backdrop_path})`,
              }}
            ></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
          </>
        ) : (
          <div
            role="status"
            className="flex items-center justify-center h-full  rounded-lg animate-pulse bg-gray-700"
          >
            <svg
              className="w-10 h-10 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20"
            >
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
            </svg>
            <span className="sr-only">Loading...</span>
          </div>
        )}
      </div>

      {/* Title */}
      <div className="grow p-6 flex flex-col gap-4 ">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">
            {movieDetails.title}
          </h1>
          <div className="text-[13px] text-white bg-yellow-400 px-5 py-1 rounded-full drop-shadow-xl border border-slate-600">
            {movieDetails.original_language}
          </div>
        </div>
        <p className="text-slate-300 font-light">{movieDetails.overview}</p>
      </div>

      {/* Movie details */}
      <div className="mx-auto  shadow-md rounded-md py-6 text-white grid grid-cols-2 gap-x-6">
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Status:</p>
          <p>{movieDetails.status}</p>
        </div>
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Genres:</p>
          <div className="flex flex-wrap gap-2">
            {movieDetails.genres
              ? movieDetails.genres.map((item) => (
                  <p
                    className="px-2 py-1 bg-rose-800 text-white rounded-lg"
                    key={item.id}
                  >
                    {item.name}
                  </p>
                ))
              : "N/A"}
          </div>
        </div>
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Release Date:</p>
          <p>{movieDetails.release_date}</p>
        </div>
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Language:</p>
          <div className="flex flex-wrap gap-2">
            {movieDetails.spoken_languages
              ? movieDetails.spoken_languages.map((item) => (
                  <p
                    className="px-2 py-1 bg-blue-800 text-white rounded-lg"
                    key={item.iso_639_1}
                  >
                    {item.english_name}
                  </p>
                ))
              : "N/A"}
          </div>
        </div>
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Revenue:</p>
          <p>$ {movieDetails.revenue}</p>
        </div>
        <div className="border-b border-slate-500 flex flex-col gap-4 py-4 ">
          <p className="font-semibold text-lg text-yellow-400">Rating:</p>
          <StarRating rating={movieDetails.vote_average} />
          <p className="text-slate-400 text-sm">
            {movieDetails.vote_count} global ratings
          </p>
        </div>
      </div>

      {/* Similar card */}
      <div className=" rounded-lg drop-shadow-2xl ">
        <h1 className="text-yellow-400 font-bold text-lg mb-4">Similar</h1>
        <div className="grid grid-cols-3 gap-4">
          {/* card */}
          {similarMovie.results
            ? similarMovie.results.map((movie) =>
                movie.poster_path !== "" ? (
                  <Link
                    key={movie.id}
                    to={`/details/${movie.id}`}
                    className="flex flex-col items-center h-24 p-2 overflow-hidden border rounded-lg shadow md:flex-row border-gray-800 bg-gray-700 hover:bg-gray-600 relative"
                  >
                    {/* Skeleton placeholder */}
                    <div className="h-full aspect-[2/3] bg-gray-400 animate-pulse rounded-lg absolute "></div>

                    {/* Actual image */}
                    <img
                      className="object-cover max-h-full rounded-lg md:h-auto md:rounded-lg opacity-0"
                      src={`${import.meta.env.VITE_IMG_URL}${
                        movie.poster_path
                      }`}
                      alt=""
                      // Use onLoad to hide skeleton when image is loaded
                      onLoad={(e) => {
                        e.target.classList.remove("opacity-0");
                        e.target.previousElementSibling.classList.add("hidden");
                      }}
                      // Add an onError handler in case the image fails to load
                      onError={(e) => {
                        e.target.src = "your-fallback-image-url"; // You can set a fallback image here
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
    </>
  );
};

export default Details;
