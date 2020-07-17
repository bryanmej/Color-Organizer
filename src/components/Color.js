import React from "react";
import StarRating from "./StarRating";

const Color = ({ title, color }) => {
  return (
    <div>
      <h2>{title}</h2>
      <button>&times;</button>
      <div style={{ backgroundColor: color }}></div>
      <div>
        <StarRating />
      </div>
    </div>
  );
};

export default Color;
