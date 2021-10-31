import {
  USER_AUTH,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
} from "../_actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, login: action.payload };
    case USER_REGISTER:
      return { ...state, register: action.payload };
    case USER_LOGOUT:
      return { ...state, logout: action.payload };
    case USER_AUTH:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
export default userReducer;
