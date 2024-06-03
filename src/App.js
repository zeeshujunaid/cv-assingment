import React from "react";
import "./App.css";
import profilePicture from "./zeeshan-removebg-preview.png";

function App() {
  return (
    <div className="resume">
      <div className="left-column">
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
        </div>
        <h1>zeeshan junaid</h1>
        <h2>Fullstack Developer</h2>
        <div className="section">
          <h3>LANGUAGES & FRAMEWORK</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JAVA SCRIPT</li>
            <li>TYPE SCRIPT</li>
            <li>REACT NATIVE</li>
            <li>REACT</li>
            <li>BOOT STRAP</li>
          </ul>
        </div>
        <div className="section">
          <h3>CONTACT</h3>
          <ul>
            <li>03300342644</li>
            <li>zeeshan.junaid.Developer@gmail.com</li>
            <li>Karachi Pakistan</li>
          </ul>
        </div>
        <div className="section">
          <h3>HOBIES & INTEREST</h3>
          <ul>
            <li>TRAVELING</li>
            <li>PHOTOGRAPHY</li>
            <li>CRICKET</li>
            <li>DRIVING</li>
            <li>GAMING</li>
            <li>PARAGLIDING</li>
          </ul>
        </div>

        <div className="section">

        </div>
      </div>
      <div className="right-column">
        <div className="section">
          <h3 className="bg-color">EDUCATION</h3>
          <div className="item">
            <h4>
            CIVIC SCHOOL
            </h4>
            <h4>
            GOVERNER IT INITIATIVE
            </h4>  
            <h4>
            SAYLANI MASS IT TRAINING CENTER
            </h4>
          </div>
        </div>
        <div className="section">
          <h3 className="bg-color">Work Experience</h3>
          <div className="item">
            <h4>2022-2024</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
          </div>
          <div className="item">
            <h5 className="bg-color">Name of Certification</h5>
            <h4>2022-2024</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
          </div>
          <div className="item">
            <h5 className="bg-color">Name of Certification</h5>
            <h4>2022-2024</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
          </div>
        </div>
        <div className="section">
          <h3 className="bg-color">Languages</h3>
          <ul>
            <li>English - 60%</li>
            <li>Urdu - 75%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
