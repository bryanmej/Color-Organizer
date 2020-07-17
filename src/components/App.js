import React from "react";
import ColorForm from "./ColorForm";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [],
    };
  }

  render() {
    return (
      <div>
        <ColorForm />
      </div>
    );
  }
}

export default App;
