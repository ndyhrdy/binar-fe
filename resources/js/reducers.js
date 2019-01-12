import { combineReducers } from "redux";

const defaultState = {
  user: {
    data: null,
    authenticating: false,
    error: null,
  }
}

const user = (state = defaultState.user, action) => {

  switch (action.type) {
    case 'USER_AUTHENTICATE':
      return { ...state, authenticating: true, error: null };
    case 'USER_SET':
      return { ...state, data: { email: action.email, accessToken: action.accessToken }, authenticating: false, error: null };
    case 'USER_SET_ERROR':
      return { ...state, authenticating: false, error: action.error };
    default:
      return state;
  }

}

export default combineReducers({ user });