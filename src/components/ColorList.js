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
          key={color.id}
          rateColor={(rating) => rateColor(color.id, rating)}
          removeColor={() => removeColor(color.id)}
        />
      ))}
    </div>
  );
};

export default ColorList;
