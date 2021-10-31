import React from "react";
import styled from "styled-components";
import Layout from "../../Layout/Layout";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  height: 80vh;
`;

const LandingPage = () => {
  return (
    <Layout>
      <Wrapper>
        <p>Hello!</p>
      </Wrapper>
    </Layout>
  );
};

export default LandingPage;
