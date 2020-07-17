import React from "react";

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
