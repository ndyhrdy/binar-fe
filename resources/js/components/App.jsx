import React, { Component } from "react";
import { HashRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";

import store from "../store";
import Main from "./Main";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Main />
        </Provider>
      </Router>
    );
  }
}

