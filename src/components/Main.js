import { React, Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="leftArea">
          <div className="infoArea">
            <p className="heyy">Heyy, this is</p>
            <h1 className="emre">EMRE TOK</h1>
          </div>
          <div className="codeArea"></div>
        </div>
        <div className="rightArea"></div>
      </main>
    );
  }
}

export default Main;
