import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../_actions/user_action";

const LandingPage = () => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logoutUser());
  };

  const isLoggedIn = useSelector((state) => {
    if (state.user.userData) {
      return state.user.userData.isAuth;
    } else {
      return false;
    }
  });

  return (
    <div>
      <p>Hello!</p>
      {isLoggedIn && <button onClick={onClick}>Logout</button>}
    </div>
  );
};

export default LandingPage;
