import { useState } from "react";

const Card = () => {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(4.5);

  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://i.redd.it/official-poster-for-christopher-nolans-oppenheimer-v0-4nj1l524d1ya1.jpg?s=d3e06867e366b308045620b23582a90200ff3acb"
          alt=""
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-l font-bold tracking-tight text-gray-900 dark:text-white">
            Oppenheimer (2023)
          </h5>
        </a>
        <p className="mb-3 font-sm text-sm text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-yellow-700 rounded-lg hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
        >
          {rating} / 5.0
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
