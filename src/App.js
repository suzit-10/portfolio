import React from "react";
import "./style.css";
import {
  FaGithub,
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const App = () => {
  return (
    <>
      <div className="container">
        <div className="l-section">
          <div className="image-bg">
            <img src="img/Me.png" alt="profile image" className="image"></img>
          </div>
        </div>
        <div className="r-section">
          <div className="r-section-wrapper">
            <div className="i-icons">
              <span>
                <a href="https://github.com/suzit-10" target="_blank">
                  <FaGithub />
                </a>
              </span>
              <span>
                <a
                  href="https://www.facebook.com/cuzith.karkey"
                  target="_blank"
                >
                  <FaFacebook />
                </a>
              </span>
              <span>
                <a href="https://www.instagram.com/suzit_10/" target="_blank">
                  <FaInstagramSquare />
                </a>
              </span>
              <span>
                <a
                  href="https://www.linkedin.com/in/sujit-karki-5024a2225/"
                  target="_blank"
                >
                  <FaLinkedin />
                </a>
              </span>
            </div>
            <h2 className="intro">Hello, my name is </h2>
            <h1 className="i-name">Sujit karki</h1>
            <div className="item-container">
              <div className="item-wrapper">
                <div className="item">React Developer</div>
                <div className="item">Django Developer</div>
                <div className="item">MySql Developer</div>
              </div>
            </div>
            <p className="description">
              Looking for a web developemtn job that suits for me as per my
              knowledge.
            </p>
            <div className="btns-wrapper">
              <a href="file/SujitKarki.pdf" download="Sujit_Karki.pdf">
                <button className="resume-btn">Get resume</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
