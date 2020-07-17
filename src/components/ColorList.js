import React from "react";
import Color from "./Color";

const ColorList = (
  colors = [],
  rateColor = (f) => f,
  removeColor = (f) => f
) => {
  return (
    <div>
      {colors.map((color) => (
        <Color
          {...color}
          key={color.id}
          rateColor={rateColor}
          removeColor={removeColor}
        />
      ))}
    </div>
  );
};

export default ColorList;
