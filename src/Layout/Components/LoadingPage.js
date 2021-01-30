import styled from "@emotion/styled";
import React from "react";
import pokeball from "../../Images/pokeball.gif";

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    max-width: 200px;
  }
`;

const LoadingPage = () => {
  return (
    <Container>
      <img src={pokeball} alt="loading..." />
    </Container>
  );
};

export default LoadingPage;
