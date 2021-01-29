import React from "react";
import { toTitleCase } from "../../../helper";
import { Text } from "../../Components/Components";

const PokemonMoves = ({ moves }) => {
  return (
    <>
      {moves.map((move) => (
        <Text key={move}>{toTitleCase(move.move.name)}</Text>
      ))}
    </>
  );
};

export default PokemonMoves;
