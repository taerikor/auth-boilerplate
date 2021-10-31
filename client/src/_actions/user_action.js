import axios from "axios";
import { USER_AUTH, USER_LOGIN, USER_LOGOUT, USER_REGISTER } from "./types";

export const loginUser = (data) => {
  const request = axios.post("/api/users/login", data).then((res) => res.data);
  return {
    type: USER_LOGIN,
    payload: request,
  };
};
export const registerUser = (data) => {
  const request = axios
    .post("/api/users/register", data)
    .then((res) => res.data);
  return {
    type: USER_REGISTER,
    payload: request,
  };
};

export const logoutUser = () => {
  const request = axios.get("/api/users/logout").then((res) => res.data);
  return {
    type: USER_LOGOUT,
    payload: request,
  };
};

export const authUser = () => {
  const request = axios.get("/api/users/auth").then((res) => res.data);
  return {
    type: USER_AUTH,
    payload: request,
  };
};
