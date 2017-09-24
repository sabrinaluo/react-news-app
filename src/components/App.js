import PropTypes from "prop-types";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "../config";
import HeaderContainer from "../containers/HeaderContainer";
import NotFound from "./layout/NotFound";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Signup from "./layout/Signup";
import Welcome from "./layout/Welcome";
import LogoutContainer from "../containers/LogoutContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <HeaderContainer items={config.header.nav} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/login" exact component={Login} />
              <Route path="/signup" exact component={Signup} />
              <Route path="/welcome" exact component={Welcome} />
              <Route path="/logout" exact component={LogoutContainer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
