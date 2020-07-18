import React from "react";
import StarRating from "./StarRating";
import "../styles/ColorStyles.css";

const Color = ({
  title,
  color,
  rating = 0,
  rateColor = (f) => f,
  removeColor = (f) => f,
}) => {
  return (
    <div className="color-card">
      <h2 className="color-title">{title}</h2>
      <button className="del-btn" onClick={removeColor}>
        &times;
      </button>

      <div className="color" style={{ backgroundColor: color }} />
      <StarRating starsSelected={rating} rateColor={rateColor} />
    </div>
  );
};

export default Color;
