import { USER_LOGIN, USER_REGISTER } from "../_actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, login: action.payload };
    case USER_REGISTER:
      return { ...state, register: action.payload };
    default:
      return state;
  }
};
export default userReducer;
