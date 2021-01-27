import React from "react";

import styled from "@emotion/styled";
import { mq } from "../../../Theme";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const StatBox = styled.div`
  display: flex;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 1rem;
  margin: 0.5rem 1rem;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const StatText = styled.p`
  margin: 0;
`;

const PokemonStats = ({ stats }) => {
  return (
    <Container>
      {stats.map((stat) => (
        <StatBox
          css={mq({
            width: ["95%", "40%", "35%"],
          })}
        >
          <StatText>{stat.stat.name}</StatText>
          <StatText>{stat.base_stat}</StatText>
        </StatBox>
      ))}
    </Container>
  );
};

export default PokemonStats;
