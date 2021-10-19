import React from "react";
import { Button} from "react-bootstrap";
import Particle from "react-particles-js";
import { Link } from "react-router-dom";
import particlesConfig from "../assets/particlesConfig.json";
import './Hero.css'
import '../assets/styles.css'
const HeroSection = () => {
  return (
    <div className="hero-section">
      <Particle params={particlesConfig}/>
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">
              MULTIDISCIPLINARY MEDICAL
            CENTER IN NEW YORK
            </h1>
          <h2 className="App-text__body">
          30% discount on full examination
          </h2>
          <Link to="https://google.com">
          <Button className="btn-book">BOOK A CONSULTATION</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
