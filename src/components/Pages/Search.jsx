import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CardGrid from "../card/CardGrid";

const Search = () => {
  const { query } = useParams();
  const [searchMovieList, setSearchMovieList] = useState([]);

  useEffect(() => {
    if (query != "") {
      getSearchMovies();
    }
  }, []);

  async function getSearchMovies() {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }/search/movie?query=${query}&include_adult=false&sort_by=popularity.desc&language=en-US&page=1${
          import.meta.env.VITE_API_KEY
        }`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setSearchMovieList(data.results);
      console.log(data.results);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  return (
    <>
      <div className="bg-[#1F2937] py-6 rounded-lg pl-4 my-10">
        <h1 className="font-normal text-2xl text-yellow-500 ">
          Seach for: <span className="text-white">{query}</span>
        </h1>
      </div>
      {searchMovieList.length > 0 ? (
        <CardGrid movieList={searchMovieList} />
      ) : (
        <h1 className="text-white">No movie found</h1>
      )}
    </>
  );
};

export default Search;
