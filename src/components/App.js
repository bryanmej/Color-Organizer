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
  }

  addNewColor(title, color) {
    this.setState({
      colors: [
        ...this.state.colors,
        {
          title,
          color,
          rating: 0,
        },
      ],
    });
  }

  removeColor(title) {
    const updateList = this.state.colors.filter(
      (color) => color.title !== title
    );
    this.setState({ colors: updateList });
  }

  render() {
    return (
      <div>
        <ColorForm addNewColor={this.addNewColor} />
        <ColorList colors={this.state.colors} removeColor={this.removeColor} />
      </div>
    );
  }
}

export default App;
