import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { registerUser } from "../../../_actions/user_action";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Input = styled.input``;
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "name") {
      setName(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      return alert("비밀번호를 다시 확인해주세요");
    }
    let body = { email, password, name };
    dispatch(registerUser(body)).then((res) => {
      if (res.payload.success) {
        history.push("/login");
      } else {
        alert("error");
      }
    });
  };
  return (
    <Form onSubmit={onSubmit}>
      <label>name</label>
      <Input name="name" type="text" onChange={onInputChange} value={name} />
      <label>email</label>
      <Input name="email" type="email" onChange={onInputChange} value={email} />
      <label>password</label>
      <Input
        name="password"
        type="password"
        onChange={onInputChange}
        value={password}
      />
      <label>Confirm Password</label>
      <Input
        name="confirmPassword"
        type="password"
        onChange={onInputChange}
        value={confirmPassword}
      />
      <Input type="submit" value="Submit" />
    </Form>
  );
};

export default RegisterPage;