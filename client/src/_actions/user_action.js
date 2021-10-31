import axios from "axios";
import { USER_LOGIN, USER_REGISTER } from "./types";

export const loginUser = (data) => {
  const request = axios.post("/api/users/login", data).then((res) => res.data);
  console.log(request);
  return {
    type: USER_LOGIN,
    payload: request,
  };
};
export const registerUser = (data) => {
  const request = axios
    .post("/api/users/register", data)
    .then((res) => res.data);
  console.log(request);
  return {
    type: USER_REGISTER,
    payload: request,
  };
};
