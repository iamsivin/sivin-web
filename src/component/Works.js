import React, { Component } from "react";
import "./Myweb.css";
import Calculator from "../static/calculator.png";
import Fishbowl from "../static/fish bowl.png";
import Colorswitcher from "../static/color switcher.png";
import Emoji from "../static/emoji.png";
import Tip from "../static/tip calculator.png";
import QRcode from "../static/QR.png";
import FB from "../static/fb img.png";
import Sound from "../static/sound.png";

export default class works extends Component {
  render() {
    return (
      <section className="container">
        <div className="works-wrap wrap">
          <div className="work-right-wrap">
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/Calculator">
                  <div className="piece inner_container">
                    <div className="image">
                      <img
                        className="workimg" src={Calculator} alt="calculator"/>
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Calculator</h1>
                      <p className="piece_description">
                        Calculator, build using JavaScript, CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/Fish-Bowl">
                  <div className="piece inner_container">
                    <div className="image">
                      <img className="workimg" src={Fishbowl} alt="fishbowl"/>
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Fish Bowl</h1>
                      <p className="piece_description">
                        Moving animated fish Bowl, build using CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/Color-Switcher">
                  <div className="piece inner_container">
                    <div className="image">
                      <img
                        className="workimg" src={Colorswitcher} alt="colorswitcher"/>
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Color Switcher</h1>
                      <p className="piece_description">
                        Background color switcher, build using VueJS, CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/Emoji-Switcher">
                  <div className="piece inner_container">
                    <div className="image">
                      <img
                        className="workimg" src={Emoji} alt="emojiswitcher"/>
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Emoji Switcher</h1>
                      <p className="piece_description">
                        Emoji Switcher, build using JavaScript, CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/Tip-Calculator">
                  <div className="piece inner_container">
                    <div className="image">
                      <img className="workimg" src={Tip} alt="tipcalculator" />
                      <div className="piece_content">
                        <h1 className="piece_title">Tip Calculator</h1>
                        <p className="piece_description">
                          Tip Calculator, build using JavaScript, CSS, HTML.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git/QRCode-Generator">
                  <div className="piece inner_container">
                    <div className="image">
                      <img className="workimg" src={QRcode} alt="generator" />
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">QR Code Generator</h1>
                      <p className="piece_description">
                        QRCode Generator, build using JavaScript, CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git">
                  <div className="piece inner_container">
                    <div className="image">
                      <img className="workimg" src={FB} alt="facebook" />
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Facebook Login</h1>
                      <p className="piece_description">
                        Fake facebook login page, build using JavaScript, CSS,
                        HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
            <div className="block right">
              <ul className="works">
                <a href="https://github.com/sivin-git">
                  <div className="piece inner_container">
                    <div className="image">
                      <img className="workimg" src={Sound} alt="sound" />
                    </div>
                    <div className="piece_content">
                      <h1 className="piece_title">Sounds</h1>
                      <p className="piece_description">
                        Sounds when mouseover color, build using JavaScript,
                        CSS, HTML.
                      </p>
                    </div>
                  </div>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
