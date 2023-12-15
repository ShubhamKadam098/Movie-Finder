import React, { useEffect, useState } from "react";
import CardGrid from "../card/CardGrid";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  async function fetchPopularMovies() {
    try {
      const response = await fetch(
        `${
          import.meta.env.VITE_BASE_URL
        }discover/movie?sort_by=popularity.desc${import.meta.env.VITE_API_KEY}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      const data = await response.json();
      setPopularMovies(data.results);
    } catch (error) {
      console.error("There was a problem fetching the data:", error);
    }
  }

  return (
    <>
      <div className="bg-[#1F2937] py-6 rounded-lg pl-4 my-10">
        <h1 className="font-semibold text-2xl text-yellow-500 ">Popular</h1>
      </div>
      <CardGrid movieList={popularMovies} />
    </>
  );
};

export default Home;
