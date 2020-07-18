import React from "react";
import "../styles/StarStyles.css";

const Star = ({ selected = false, rateColor = (f) => f }) => {
  return (
    <div className={selected ? "star selected" : "star"} onClick={rateColor} />
  );
};

export default Star;
