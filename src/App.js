import React from "react";
import "./App.css";
import profilePicture from "./images/profile.jpg"; // Replace with your profile picture path

function App() {
  return (
    <div className="resume">
      <div className="left-column">
        <div className="profile-picture">
          <img src={profilePicture} alt="Profile" />
        </div>
        <h1>Hasan</h1>
        <h2>Frontend Developer</h2>
        <div className="section">
          <h3>Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
          </ul>
        </div>
        <div className="section">
          <h3>Contact</h3>
          <ul>
            <li>033333333333</li>
            <li>smit@gmail.com</li>
            <li>Karachi Pakistan</li>
          </ul>
        </div>
        <div className="section">
          <h3>Hobbies & Interest</h3>
          <ul>
            <li>Traveling</li>
            <li>Driving</li>
            <li>Gaming</li>
            <li>paragliding</li>
          </ul>
        </div>

        <div className="section">
          <h3>Honor & Award</h3>
          <p>
            <p className="y">2024</p>
           lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
          </p>
        </div>
      </div>
      <div className="right-column">
        <div className="section">
          <h3 className="bg-color">Education</h3>
          <div className="item">
            <h4>2022-2024</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
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
            <h4>2022-2024</h4>
            <h5 className="bg-color">Name of Certification</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
          </div>
          <div className="item">
            <h4>2022-2024</h4>
            <h5 className="bg-color">Name of Certification</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              aliquam scelerisque aliquam. Nulla egestas pulvinar arcu.
            </p>
          </div>
        </div>
        <div className="section">
          <h3 className="bg-color">Languages</h3>
          <ul>
            <li>
             
              English - 60%
            </li>
            <li>Urdu - 75%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
