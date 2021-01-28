import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './views/LandingPage/LandingPage'
import LoginPage from './views/LoginPage/LoginPage';
import NavBar from './views/NavBar/NavBar';
import RegisterPage from './views/RegisterPage/RegisterPage';
import Auth from '../hoc/auth';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Auth(LandingPage, null)} />
        <Route exact path='/login'component={Auth(LoginPage, false)} />
        <Route exact path='/register' component={Auth(RegisterPage, false)} />
      </Switch>
    </Router>
  );
}

export default App;
