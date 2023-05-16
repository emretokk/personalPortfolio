import { React, Component } from "react";
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
          <div className="notes-area">
            <div className="project">
              <h3 className="h-project">
                <a href="https://emretok.dev/">emretok.dev</a>
              </h3>
              <p className="project-info">
                This is the source code of website that you are in. It's written
                by React and pure css.
              </p>
            </div>
            {/* <div className="project">
              <h3 className="h-project">
                <a href="https://github.com/emretokk/rubikscube">
                  Rubik's Cube
                </a>
              </h3>
              <p className="project-info">
                Its a terminal based rubik's cube implementation, if you know
                how to solve it then go ahead {":)"}
              </p>
            </div>
            <div className="project">
              <h3 className="h-project">
                <a href="https://github.com/emretokk/30daysreact">
                  30 Days of React
                </a>
              </h3>
              <p className="project-info">
                I learned the react with this, there is lots of mini projects in
                this repo. Still active not finished {":("}
              </p>
            </div>
            <div className="project">
              <h3 className="h-project">
                <a href="https://github.com/emretokk/30daysjs">
                  30 Days of Javascript
                </a>
              </h3>
              <p className="project-info">
                I learned the Javascript with this. Its completed except just a
                few days boring days. I'll do them someday :P
              </p>
            </div> */}
            <div className="project">
              <h3 className="h-project">More will be added later</h3>
              <p className="project-info">
                If you wanna see my mini projects check my github
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
