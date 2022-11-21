import './NewsUi.css';
import React from "react";

function NewUi() {
  return (
    <div className="main-container">
      <div className="inner-container">
        <a href="https://www.gmail.com">Gmail</a>
        <a href="https://www.w3schools.com" style={{ margin: "0 10px" }}>
          Images
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Outdoors-man-portrait_%28cropped%29.jpg/220px-Outdoors-man-portrait_%28cropped%29.jpg"
          alt=""
        />
      </div>

      <div className="mid-container">
        <h1 style={{ margin: 0 }}>
          <span style={{ color: "blue" }}>G</span>
          <span style={{ color: "red" }}>o</span>
          <span style={{ color: "yellow" }}>o</span>
          <span style={{ color: "blue" }}>g</span>
          <span style={{ color: "green" }}>l</span>
          <span style={{ color: "red" }}>e</span>
        </h1>
        <input type="text" />

        <div>
          <button className="button-container">Google Search</button>
          <button className="button-container">I'm Feeling Lucky</button>
        </div>
      </div>
      <div className="footer-container">
        <p>Pakistan</p>
      </div>
      <div className="end-footer-container">
        <div className="footer-start-items">
            <a class="a-footer-item" href="https://www.gmail.com">About</a>
            <a class="a-footer-item" href="https://www.gmail.com">Advertising</a>
            <a  class="a-footer-item" href="https://www.gmail.com"> Business</a>
            <a  class="a-footer-item" href="https://www.gmail.com">How Search Works</a>    
        </div>
        <div className="footer-end-items">
                <a class="a-footer-item" href="https://www.gmail.com">Privacy</a>
                <a class="a-footer-item" href="https://www.gmail.com">Terms</a>
                <a class="a-footer-item" href="https://www.gmail.com">Settings</a>
        </div>
        
      </div>
    </div>
  );
}

export default NewUi;
