import PropTypes from "prop-types";
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./Header";
import NotFound from "./layout/NotFound";
import HomeContainer from "../containers/HomeContainer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Router>
          <Switch>
            <Route path="/" exact component={HomeContainer} />
            <Route path="*" component={HomeContainer} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
