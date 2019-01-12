import { post } from "axios";
const apiBaseURL = "https://test-binar.herokuapp.com";

export const doLogin = ({ email, password }) => (dispatch, getState) => {
  if (getState().user.authenticating || getState().user.data !== null) {
    return;
  }
  dispatch({ type: "USER_AUTHENTICATE" });
  return post(apiBaseURL + "/auth/login", { email, password })
    .then(response =>
      dispatch({
        type: "USER_SET",
        email,
        accessToken: response.data.result.access_token
      })
    )
    .catch(error => dispatch({ type: "USER_SET_ERROR", error }));
};
