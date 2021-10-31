import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { authUser } from "../_actions/user_action";

const Auth = (SpecificCompnenet, option, isAdminRoute = null) => {
  const AuthCheck = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    // null => 아무나 출입 가능
    // true => 로그인 유저만 출입가능
    // false => 비로그인 유저만 출입가능
    useEffect(() => {
      dispatch(authUser()).then((res) => {
        if (res.payload.isAuth) {
          if (isAdminRoute && !res.payload.isAdmin) {
            history.push("/");
          } else {
            if (option === false) {
              history.push("/");
            }
          }
        } else {
          if (option) {
            history.push("/login");
          }
        }
      });
    }, [dispatch, history]);
    return <SpecificCompnenet />;
  };
  return AuthCheck;
};
export default Auth;
