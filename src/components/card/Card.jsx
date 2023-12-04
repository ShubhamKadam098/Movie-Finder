import { useState } from "react";

const Card = () => {
  // eslint-disable-next-line no-unused-vars
  const [rating, setRating] = useState(4.5);

  return (
    <div className="max-w-xs bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 hover:ease-in-out hover:duration-150">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://i.redd.it/official-poster-for-christopher-nolans-oppenheimer-v0-4nj1l524d1ya1.jpg?s=d3e06867e366b308045620b23582a90200ff3acb"
          alt=""
        />
      </a>
      <div className="p-3">
        <a href="#">
          <h5 className="mb-2 text-base font-semibold tracking-tight text-gray-900 dark:text-white">
            Oppenheimer
          </h5>
        </a>
        <div className="">
          <p className="text-gray-300">2023</p>
          <div className="inline-flex items-center px-2 py-1 text-xs font-medium text-center text-white bg-yellow-400 rounded-lg hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-yellow-400 dark:hover:bg-yellow-500 dark:focus:ring-yellow-600">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
