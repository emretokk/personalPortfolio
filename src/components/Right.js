import { React, Component } from "react";
import mycoolpic from "../assets/myawesomepic.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faChevronDown } from "@fortawesome/free-solid-svg-icons";

class Right extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rightArea">
        <div className="notes-container">
          <div className="notes-header">
            <FontAwesomeIcon icon={faGear} className="gear" />
            <h2 className="myprojects-headline">My Projects</h2>
            <FontAwesomeIcon icon={faChevronDown} className="chevrondown" />
          </div>
          <div className="notes-area"></div>
        </div>
      </div>
    );
  }
}

export default Right;
