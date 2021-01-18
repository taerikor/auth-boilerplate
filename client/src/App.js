import React from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LandingPage from './components/views/LandingPage/LandingPage'
import LoginPage from './components/views/LoginPage/LoginPage';
import RegisterPage from './components/views/RegisterPage/RegisterPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
          <LandingPage />
        </Route>
        <Route exact path='/login' >
          <LoginPage />
        </Route>
        <Route exact path='/register' >
          <RegisterPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
