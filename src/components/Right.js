import { React, Component } from "react";
import mycoolpic from "../assets/myawesomepic.jpg";

class Right extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="rightArea">
        <div className="pic-container">
          <img src={mycoolpic} alt="mycoolpic" className="mycoolpic"></img>
        </div>
        <div className="projectsHeader">
          <h1 className="projectsHeadline">My Projects</h1>
        </div>
        <div className="stickyZone1">
          <div className="stickyZone2">
            <div className="pin-container">
              <div className="pin">
                <div className="pin-blackdot"></div>
              </div>
            </div>
            <div className="projects-container">
              <div className="proj-container">
                <div className="proj-button">
                  <a
                    className="link"
                    href="https://github.com/emretokk/emretok.github.io"
                  >
                    emretok.dev
                  </a>
                </div>
                <p className="proj-p">
                  This is the source code of website that you are in.
                </p>
              </div>
              <div className="proj-container">
                <div className="proj-button">
                  <a
                    className="link"
                    href="https://github.com/emretokk/rubikscube"
                  >
                    Rubik's Cube
                  </a>
                </div>
                <p className="proj-p">
                  {
                    "Its a terminal based rubik's cube implementation, if you know how to solve rubik's cube go ahead :)"
                  }
                </p>
              </div>
              <div className="proj-container">
                <div className="proj-button">
                  <a
                    className="link"
                    href="https://github.com/emretokk/30daysreact"
                  >
                    30 Days React
                  </a>
                </div>
                <p className="proj-p">
                  {
                    "I learned the react with this, there is lots of mini projects in this repo. Still active not finished :("
                  }
                </p>
              </div>
              <div className="proj-container">
                <div className="proj-button">
                  <a
                    className="link"
                    href="https://github.com/emretokk/30daysjs"
                  >
                    30 Days Js
                  </a>
                </div>
                <p className="proj-p">
                  I learned the javascript with this. Completed this just a few
                  boring days are missing i'll do these someday :P
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Right;
