import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles.css";
import HeroSection from "./screens/HeroSection";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HeroSection></HeroSection>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
