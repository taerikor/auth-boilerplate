import axios from "axios";
import { USER_LOGIN } from "./types";

export const loginUser = (data) => {
  const request = axios.post("/api/users/login", data).then((res) => res.data);
  console.log(request);
  return {
    type: USER_LOGIN,
    payload: request,
  };
};
