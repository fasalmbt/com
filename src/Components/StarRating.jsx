import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const StarRating = ({ rating }) => {
  const ratingNumber = Number(rating);
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= ratingNumber) {
      stars.push(
        <span key={i} className="icon has-text-warning">
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="icon has-text-grey-lighter">
          <FontAwesomeIcon icon={faStar} />
        </span>
      );
    }
  }
  return <>{stars}</>;
};

export default StarRating;
