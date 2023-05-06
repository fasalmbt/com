import React from "react";

const StarRating = ({ rating }) => {
  const ratingNumber = Number(rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingNumber) {
      stars.push(
        <span key={i} className="text-yellow-500">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-500">
          &#9733;
        </span>
      );
    }
  }
  return <>{stars}</>;
};

export default StarRating;
