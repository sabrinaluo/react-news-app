import PropTypes from "prop-types";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import config from "../config";
import HeaderContainer from "../containers/HeaderContainer";
import NotFound from "./layout/NotFound";
import HomeContainer from "../containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Router>
          <div>
            <HeaderContainer items={config.header.nav} />
            <Switch>
              <Route path="/" exact component={HomeContainer} />
              <Route path="*" component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
