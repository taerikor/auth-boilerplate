import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled, { css } from "styled-components";
import { loginUser } from "../../../_actions/user_action";
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  letter-spacing: 10px;
  color: #b53d00;
`;
export const InputCSS = css`
  padding: 0 20px;
  border: 5px solid #ef6c00;
  height: 50px;
  width: 400px;
  color: #ef6c00;
  border-radius: 50px;
  font-size: 1.8em;
`;
export const ButtonCSS = css`
  background-color: #ef6c00;
  color: white;
  &:hover {
    color: #ef6c00;
    background-color: transparent;
  }
`;
export const Input = styled.input`
  ${InputCSS}
  margin-bottom: 10px;
  &::placeholder {
    color: #ef6c00;
  }
  &:focus {
    outline: none;
    border: 5px solid #ff9d3f;
  }
`;
export const LinkWrapper = styled.div`
  ${InputCSS}
  display:flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  ${ButtonCSS}
`;
export const Link = styled.a`
  &:link {
    text-decoration: none;
  }
`;

export const Submit = styled.input`
  all: unset;
  cursor: pointer;
  text-align: center;
  ${InputCSS}
  ${ButtonCSS}
`;
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const onInputChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
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
      <Title>LOGIN</Title>
      <Input
        name="email"
        placeholder="Email"
        type="email"
        onChange={onInputChange}
        value={email}
      />
      <Input
        placeholder="Password"
        name="password"
        type="password"
        onChange={onInputChange}
        value={password}
      />
      <Link href="/register">
        <LinkWrapper>Register</LinkWrapper>
      </Link>
      <Submit type="submit" value="Submit" />
    </Form>
  );
};

export default LoginPage;
