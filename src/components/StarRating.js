import React from "react";
import Star from "./Star";

const StarRating = ({
  totalStars = 5,
  starsSelected,
  rateColor = (f) => f,
}) => {
  return (
    <div>
      {[...Array(totalStars)].map((num, i) => (
        <Star key={i} />
      ))}
    </div>
  );
};

export default StarRating;
