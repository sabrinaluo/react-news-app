import React from "react";
import { connect } from "react-redux";

import App from "../components/App";

const AppContainer = props => <App {...props} />;

export default connect(null)(AppContainer);
