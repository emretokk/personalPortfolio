import { React, Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faSpotify,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

class Left extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="leftArea">
        <div className="infoArea">
          <p className="heyy">Heyy, this is</p>
          <h1 className="emre">EMRE TOK</h1>
          <ul className="icons">
            <li className="li-icon">
              <a href="https://github.com/emretokk" title="Github">
                <FontAwesomeIcon className="icon github" icon={faGithub} />
              </a>
            </li>
            <li className="li-icon">
              <a href="https://www.instagram.com/emre.t0k" title="Instagram">
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </a>
            </li>
            <li className="li-icon">
              <a href="https://twitter.com/emre_t0k" title="Twitter">
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </a>
            </li>

            <li className="li-icon">
              <a
                href="https://open.spotify.com/user/u71m1becprhr38gy3pxsqmtrx?si=038244ac472c4d2a"
                title="Spotify"
              >
                <FontAwesomeIcon className="icon" icon={faSpotify} />
              </a>
            </li>
          </ul>
        </div>
        <div className="codeArea">
          <ul className="lineNumbers">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
            <li>11</li>
            <li>12</li>
            <li>13</li>
            <li>14</li>
            <li>15</li>
          </ul>
          <div className="straightLine"></div>
          <ul className="codeZone">
            <li className="line">
              <span className="red">import {"{"}</span> React
              <span className="grey">,</span> Component{" "}
              <span className="red">{"} from"}</span>{" "}
              <span className="grey">"</span>
              <span className="yellow">react</span>
              <span className="grey">";</span>
            </li>
            <li className="line">
              <span className="red">{"import { "}</span>
              Emre
              <span className="grey">, </span>
              Tok
              <span className="red">{"} from "}</span>
              <span className="grey">"</span>
              <span className="yellow">./components/Main.js</span>
              <span className="grey">";</span>
            </li>
            <li className="line hidden">line3</li>
            <li className="line">
              <span className="blue">class App </span>
              <span className="red">extends </span>
              <span className="blue">Component </span>
              <span className="red">{"{"}</span>
            </li>
            <li className="line">
              <span className="green">&emsp;render</span>
              <span className="orange">{"() {"}</span>
            </li>
            <li className="line">
              <span className="red">
                {/* Regular space: &nbsp;
                    Two spaces gap: &ensp;
                    Four spaces gap: &emsp; */}
                &emsp;&emsp;return
              </span>
              <span className="yellow">{" ("}</span>
            </li>
            <li className="line">
              <span className="grey">&emsp;&emsp;&emsp;{"<"}</span>
              <span className="red">div </span>
              <span className="blue">className</span>
              <span className="red">=</span>
              <span className="grey">"</span>
              <span className="yellow">App-container</span>
              <span className="grey">{'">'}</span>
            </li>
            <li className="line">
              <span className="grey">&emsp;&emsp;&emsp;&emsp;{"<"}</span>
              <span className="red">Emre </span>
              <span className="grey">{"/>"}</span>
            </li>
            <li className="line">
              <span className="grey">&emsp;&emsp;&emsp;&emsp;{"<"}</span>
              <span className="red">Tok </span>
              <span className="grey">{"/>"}</span>
            </li>
            <li className="line">
              <span className="grey">&emsp;&emsp;&emsp;{"</"}</span>
              <span className="red">div</span>
              <span className="grey">{">"}</span>
            </li>
            <li className="line">
              <span className="yellow">&emsp;&emsp;{")"}</span>
              <span className="grey">;</span>
            </li>
            <li className="line">
              <span className="orange">&emsp;{"}"}</span>
            </li>
            <li className="line">
              <span className="red">{"}"}</span>
            </li>
            <li className="line hidden">line 15</li>
            <li className="line">
              <span className="red">export default </span>App
              <span className="grey">;</span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Left;
