import { USER_LOGIN } from "../_actions/types";

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, data: action.payload };

    default:
      return state;
  }
};
export default userReducer;
