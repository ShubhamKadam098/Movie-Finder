import React from "react";
import PropTypes from "prop-types";

const StarRating = ({ rating }) => {
  const MAX_STARS = 5;
  const convertedRating = rating / 2; // Convert 10-star scale to 5-star scale

  const stars = [];
  for (let i = 0; i < MAX_STARS; i++) {
    if (i < Math.floor(convertedRating)) {
      // Add a filled star
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="20"
          height="20"
          fill="gold"
          stroke="gold"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        >
          <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.6 5.7 21l2.3-7L2 9.4h7.6L12 2z" />
        </svg>
      );
    } else {
      // Check for decimal part to decide on empty, half, or filled star
      const decimalPart = convertedRating - i;
      if (decimalPart >= 0.75) {
        // Add a filled star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="gold"
            stroke="gold"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.6 5.7 21l2.3-7L2 9.4h7.6L12 2z" />
          </svg>
        );
      } else if (decimalPart >= 0.25) {
        // Add a half-filled star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="gold"
            stroke="gold"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.6 5.7 21l2.3-7L2 9.4h7.6L12 2z" />
          </svg>
        );
      } else {
        // Add an empty star
        stars.push(
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            fill="none"
            stroke="gold"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 2l2.4 7.4H22l-6 4.6 2.3 7L12 17.6 5.7 21l2.3-7L2 9.4h7.6L12 2z" />
          </svg>
        );
      }
    }
  }

  return (
    <>
      <div className="flex items-center gap-4 ">
        <div className="flex items-center">{stars}</div>
        <p className="font-medium text-base text-slate-200 ">
          {convertedRating.toFixed(1)} / 5.0
        </p>
      </div>
    </>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
