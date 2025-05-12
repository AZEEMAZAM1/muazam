import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">MUAZAM AZAM </span>
            from <span className="purple"> DUBAI, UAE.</span>
            <br />
            I am currently employed as a senior medical billing assistant.
            <br />
            I have completed Bsc  (Cambridge) in Medical Lab Technologies. 
            
            <br />
            <br />
            Apart from billing and lab TECHNICIAN, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Muazam</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
