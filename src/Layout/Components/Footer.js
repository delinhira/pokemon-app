import React from "react";
import styled from "@emotion/styled";
import { Text } from "./Components";

const Container = styled.div`
  width: 100vw;
  box-sizing: border-box;
  padding: 1rem;
  text-align: center;

  background-color: #666666;
  opacity: 1;
  background-image: radial-gradient(
    ellipse farthest-corner at 11px 11px,
    #747474,
    #747474 50%,
    #666666 50%
  );
  background-size: 12px 12px;
`;

const Footer = () => {
  return (
    <Container>
      <Text white>&copy; Delinda 2020</Text>
    </Container>
  );
};

export default Footer;
