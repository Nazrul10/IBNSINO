import '@fortawesome/fontawesome-free/css/all.min.css';
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/styles.css";
import Home from "./Components/Home/Home";
import Allservices from "./Components/Allservices/Allservices";
import Details from "./Components/Details/Details";
import SignIn from "./Forms/SignIn/SignIn";
import AuthContext from "./AuthContext/AuthContext";
import Register from "./Forms/Register/Register";
import PrivateRouter from "./Components/PrivateRouter/PrivateRouter";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import PageNotfound from './Components/PageNotfound/PageNotfound';

function App() {
  return (
    <AuthContext>
      <Router>
      <Switch>
        <Route exact path="/">
       <Home></Home>
        </Route>
        <Route path="/home">
       <Home></Home>
        </Route>
        <Route path="/about">
       <About></About>
        </Route>
        <PrivateRouter path="/contact">
       <Contact></Contact>
        </PrivateRouter>
        <Route path="/service">
       <Allservices></Allservices>
        </Route>
        <Route path="/login">
       <SignIn></SignIn>
        </Route>
        <Route path="/register">
       <Register></Register>
        </Route>
        <PrivateRouter path="/Details/:id">
       <Details></Details>
        </PrivateRouter>
        <Route path="*">
          <PageNotfound></PageNotfound>
        </Route>
      </Switch>
    </Router>
    </AuthContext>
  );
}

export default App;
