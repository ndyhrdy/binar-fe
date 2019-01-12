import React, { Component } from "react";
import { connect } from "react-redux";
import { doLogin } from "../actions";

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  componentWillReceiveProps(nextProps) {
    if (
      nextProps.user.data !== this.props.user.data &&
      this.props.user.data === null
    ) {
      return this.props.history.push("/dashboard");
    }
  }

  render() {
    const {
      doLogin,
      user: { authenticating, error }
    } = this.props;
    const { email, password } = this.state;

    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="row">
              <div className="col-sm-6 border-right py-5">
                <h3 className="mb-3">Login</h3>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => this.setState({ email: e.target.value })}
                    className="form-control"
                    disabled={authenticating}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={e => this.setState({ password: e.target.value })}
                    className="form-control"
                    disabled={authenticating}
                  />
                </div>

                <div className="mt-5">
                  <button
                    type="button"
                    className="btn btn-primary"
                    disabled={authenticating}
                    onClick={() => doLogin({ email, password })}
                  >
                    {authenticating ? "Hang on.." : "Log In"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ user: state.user });

const mapDispatchToProps = { doLogin };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
