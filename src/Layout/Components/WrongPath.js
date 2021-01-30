import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import { Text } from "./Components";

const Container = styled.div`
  padding: 2rem;
  a {
    color: ${(props) => props.theme.colors.red};
    text-decoration: none;
  }
`;

const WrongPath = () => {
  return (
    <Container>
      <Text md mb bold>
        Are you lost?
      </Text>
      <Text sm bold>
        There's nothing to see here, let me take you back{" "}
        <Link to="/">Home</Link>
      </Text>
    </Container>
  );
};

export default WrongPath;
