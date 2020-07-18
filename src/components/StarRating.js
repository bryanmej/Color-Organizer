import React from "react";
import Star from "./Star";
import "../styles/StarRatingStyles.css";

const StarRating = ({
  totalStars = 5,
  starsSelected,
  rateColor = (f) => f,
}) => {
  return (
    <div className="rating-container">
      <div className="star-container">
        {[...Array(totalStars)].map((num, i) => (
          <Star
            key={i}
            selected={i < starsSelected}
            rateColor={() => rateColor(i + 1)}
          />
        ))}
      </div>
      <p>{`${starsSelected} of ${totalStars}`}</p>
    </div>
  );
};

export default StarRating;
