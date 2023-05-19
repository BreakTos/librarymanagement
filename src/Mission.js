import React from "react";
import './Mission.css';

function Mission(){
  return(
    <div className="mission-container">
      <h1>Our Mission</h1>
      <p className="mission-text">
      Our mission is to provide access to high-quality educational resources and promote a love of learning and reading among all members of our community. We strive to foster a supportive environment that encourages curiosity, creativity, and growth, while collaborating with local organizations to enhance our outreach and impact. Through our services and programs, we aim to empower individuals with the knowledge and skills needed to thrive in an ever-changing world.
      </p>
      <ul className="mission-list">
        <li>Provide access to high-quality educational resources.</li>
        <li>Promote a love of learning and reading among all members of our community.</li>
        <li>Foster a supportive environment that encourages curiosity, creativity, and growth.</li>
        <li>Collaborate with local organizations to enhance our outreach and impact.</li>
      </ul>
      
      <div className="stuff">
      <div className="mission-timings">
        <h2>Hours of Operation:</h2>
        <ul>
          <li>Monday-Friday: 8am-1am</li>
          <li>Weekends: 8am-1am</li>
          <li>Holidays: Closed</li>
        </ul>
      </div>
      <div className="mission-locations">
        <h2>Locations:</h2>
        <ul>
          
          <li>Academic Block 1 , First Floor</li>
          <li>Gla University </li>
          <li>Mathura Campus</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

export default Mission;
