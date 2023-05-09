import { React, Component } from "react";
import Left from "./Left.js";
import Right from "./Right.js";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <Left />
        <Right />
      </main>
    );
  }
}

export default Main;
