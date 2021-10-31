import React from "react";
import NavBar from "../views/NavBar/NavBar";

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div>{children}</div>
    </>
  );
};

export default Layout;
