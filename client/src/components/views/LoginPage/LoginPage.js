import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { loginUser } from "../../../_actions/user_action";
const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onInputChange = (event) => {
    const { type } = event.target;
    const { value } = event.target;
    if (type === "email") {
      setEmail(value);
    } else if (type === "password") {
      setPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    let body = { email, password };
    dispatch(loginUser(body)).then((res) => {
      if (res.payload.success) {
        history.push("/");
      } else {
        alert("error");
      }
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      <Input type="email" onChange={onInputChange} value={email} />
      <Input type="password" onChange={onInputChange} value={password} />
      <Input type="submit" value="Submit" />
    </Form>
  );
};

export default LoginPage;
