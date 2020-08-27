import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import Login from './views/login/login.jsx';
import Register from './views/register/register.jsx';
import Landing from './views/landing/landing.jsx';
import Page404 from './views/404/404.jsx';
import ContactMail from './views/contactUs/contactUs.jsx';
import Profile from './views/profile/profile.jsx';
import Logout from './views/logout/logout.jsx';
import ForgotPass from './views/forgotPass/forgotPass.jsx';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Login} />
        <Route path='/register' exact component={Register} />
        <Route path='/init' exact component={Landing} />
        <Route path='/contactMail' exact component={ContactMail} />
        <Route path='/profile' exact component={Profile} />
        <Route path='/logout' exact component={Logout} />
        <Route path='/forgotPass' exact component={ForgotPass} />


        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;