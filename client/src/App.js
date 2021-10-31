import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import RegisterPage from "./components/views/RegisterPage/RegisterPage";
import Auth from "./hoc/auth";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Auth(LandingPage, null)} exact />
        <Route path="/login" component={Auth(LoginPage, false)} exact />
        <Route path="/register" component={Auth(RegisterPage, false)} exact />
      </Switch>
    </Router>
  );
}

export default App;
