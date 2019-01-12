import React, { Fragment, Component } from "react";
import AuthenticatedArea from "./AuthenticatedArea";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

class Main extends Component {
  render() {
    const { location, history } = this.props;

    return (
      <Fragment>
        <AuthenticatedArea route={{ location, history }}>
          <Switch>
            <Route exact path="/dashboard" component={() => <Dashboard />} />

            <Redirect to="/dashboard" />
          </Switch>
        </AuthenticatedArea>
        <Route exact path="/auth" render={route => <Login {...route} />} />
      </Fragment>
    );
  }
}

export default withRouter(Main);
