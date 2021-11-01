import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router";
import { logoutUser } from "../../../_actions/user_action";
const Wrapper = styled.nav`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ef6c00;
  border-bottom: 10px solid #ff9d3f;
`;

const Logo = styled.a`
  all: unset;
  cursor: pointer;
  font-size: 2.3rem;
  font-weight: 900;
  letter-spacing: -3px;
  margin-left: 10px;
  &:hover {
    color: #ff9d3f;
  }
`;
const ButtonWrapper = styled.div`
  display: flex;
`;
const Link = styled.a`
  all: unset;
`;

const Button = styled.div`
  cursor: pointer;
  font-size: 1.2rem;
  letter-spacing: -1px;
  word-spacing: -2px;
  margin-right: 10px;
  &:hover {
    color: #ff9d3f;
  }
`;
const NavBar = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(logoutUser()).then((res) => {
      if (res.payload.success) {
        history.push("/login");
      } else {
        alert("Logout error");
      }
    });
  };
  return (
    <Wrapper>
      <Logo href="/">LOGO</Logo>
      <ButtonWrapper>
        {user.userData ? (
          <>
            {user.userData.isAuth ? (
              <Button onClick={onClick}>Logout</Button>
            ) : (
              <>
                <Link href="/login">
                  <Button>SIGN IN</Button>
                </Link>
                <Link href="/register">
                  <Button>SIGN UP</Button>
                </Link>
              </>
            )}
          </>
        ) : (
          <></>
        )}
      </ButtonWrapper>
    </Wrapper>
  );
};

export default NavBar;
