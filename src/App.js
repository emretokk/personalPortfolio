import { React, Component } from "react";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App-container">
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
