import React from "react";
import ColorForm from "./ColorForm";
import ColorList from "./ColorList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
    this.addNewColor = this.addNewColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
  }

  uuidGenerator() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
      c
    ) {
      var r = (Math.random() * 16) | 0,
        v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  addNewColor(title, color) {
    this.setState({
      colors: [
        ...this.state.colors,
        {
          id: this.uuidGenerator(),
          title,
          color,
          rating: 0,
        },
      ],
    });
  }

  rateColor(id, rating) {
    const updateRate = this.state.colors.map((color) => {
      return color.id !== id ? color : { ...color, rating };
    });
    this.setState({
      colors: updateRate,
    });
  }

  removeColor(id) {
    const updateList = this.state.colors.filter((color) => color.id !== id);
    this.setState({ colors: updateList });
  }

  render() {
    const { addNewColor, rateColor, removeColor } = this;
    return (
      <>
        <ColorForm addNewColor={addNewColor} />
        <ColorList
          colors={this.state.colors}
          removeColor={removeColor}
          rateColor={rateColor}
        />
      </>
    );
  }
}

export default App;
