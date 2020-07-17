import React from "react";
import Color from "./Color";
import "../styles/ColorListStyles.css";

const ColorList = ({
  colors = [],
  rateColor = (f) => f,
  removeColor = (f) => f,
}) => {
  return (
    <div className="colors-container">
      {colors.map((color) => (
        <Color
          {...color}
          key={color.title}
          rateColor={rateColor}
          removeColor={() => removeColor(color.title)}
        />
      ))}
    </div>
  );
};

export default ColorList;
