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
import CreateEvent from './views/createEvent/createEvent.jsx';
import DetailEvent from './views/detailEvent/detailEvent.jsx';

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
        <Route path='/createevent' exact component={CreateEvent} />
        <Route path='/detailEvent' exact component={DetailEvent}/>

        <Route component={Page404} />
      </Switch>
    </Router>
  );
}

export default App;