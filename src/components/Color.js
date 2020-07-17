import React from "react";
import StarRating from "./StarRating";
import "../styles/ColorStyles.css";

const Color = ({ title, color, removeColor }) => {
  return (
    <div className="color-card">
      <div>
        <h2>{title}</h2>
        <button className="del-btn" onClick={removeColor}>
          &times;
        </button>
      </div>
      <div className="color" style={{ backgroundColor: color }} />
      <div>
        <StarRating />
      </div>
    </div>
  );
};

export default Color;
