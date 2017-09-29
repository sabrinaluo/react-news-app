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
import { BASE_HREF } from "../constants";
class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <HeaderContainer items={config.header.nav} />
            <Switch>
              <Route path={BASE_HREF} exact component={Home} />
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={Signup} />
              <Route path="/welcome" exct component={Welcome} />
              <Route path="/logout" component={LogoutContainer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
