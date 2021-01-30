import React from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { toTitleCase } from "../../../helper";
import { Text } from "../../Components/Components";
import { mq } from "../../../Theme";

const MovesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin: 0 auto;
  p {
    text-align: start;
  }
`;

const mqMovesContainer = mq({
  width: ["100%", "90%", "90%"],
});

const mqText = mq({
  width: ["100%", "50%", "33%"],
});

const PokemonMoves = ({ moves }) => {
  return (
    <MovesContainer css={mqMovesContainer}>
      {moves.map((move, index) => (
        <Text key={index} css={mqText}>
          &bull; {toTitleCase(move.move.name)}
        </Text>
      ))}
    </MovesContainer>
  );
};

export default PokemonMoves;
