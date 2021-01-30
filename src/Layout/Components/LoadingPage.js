import React from "react";
import styled from "@emotion/styled";
import pokeball from "../../Images/pokeball.gif";

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  min-height: 100vh;
  position: absolute;
  top: 0;
  width: 100%;
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
