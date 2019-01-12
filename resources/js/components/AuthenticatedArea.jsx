import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class AuthenticatedArea extends Component {
  componentDidMount() {
    if (!this.props.user && this.props.route.location.pathname != "/auth") {
      this.props.route.history.push("/auth");
    }
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return <Fragment>{this.props.children}</Fragment>;
  }
}

const mapStateToProps = state => ({
  user: state.user.data
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthenticatedArea);
