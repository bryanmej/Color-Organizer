import React from "react";

const ColorForm = ({ addNewColor = (f) => f }) => {
  let _title, _color;

  const submit = (e) => {
    e.preventDefault();
    addNewColor(_title.value, _color.value);
    _title.value = "";
    _color.value = "#000000";
  };

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        placeholder="color title..."
        ref={(input) => (_title = input)}
      />
      <input type="color" ref={(input) => (_color = input)} />
      <button>add</button>
    </form>
  );
};

export default ColorForm;
