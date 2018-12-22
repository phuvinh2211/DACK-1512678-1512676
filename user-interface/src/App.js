import React, { Component } from 'react';
import HomePage from './component/homePage'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import LoginPage from './component/loginpage'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/account/:id" component={HomePage}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
