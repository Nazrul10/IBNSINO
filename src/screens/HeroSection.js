import React from "react";
import { Button} from "react-bootstrap";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

const HeroSection= () => {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">
              MULTIDISCIPLINARY MEDICAL
            CENTER IN NEW YORK
            </h1>
          <h2 className="App-text__body">
          30% discount on full examination
          </h2>
          <Button>BOOK A CONSULTATION</Button>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
