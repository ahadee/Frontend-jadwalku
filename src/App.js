import React from 'react';
import './App.css';
import Login from './components/login/login'
import Register from './components/register/Register'
import EmployeeMainPage from './components/EmployeeMainPage'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from './components/employee/profile/Profile'
import ManagerMainPage from './components/ManagerMainPage'
import ProfileManager from './components/manager/profile/Profile'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/main-page" component={EmployeeMainPage} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/main-page/manager" component={ManagerMainPage} />
          <Route exact path="/profile/manager" component={ProfileManager} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
