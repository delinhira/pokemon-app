import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { toTitleCase } from "../../../helper";
import { Button, Text } from "../../Components/Components";
import { ModalContext } from "../../../Context/ModalContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Items = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
  padding: 0.5rem 1rem;
  border-radius: 5px;

  p {
    margin: auto 0;
  }
`;

const PokemonOwned = ({ id }) => {
  const [myPokemon, setMyPokemon] = useState([]);
  const { toggleReleaseModal } = useContext(ModalContext);

  useEffect(() => {
    setMyPokemon(JSON.parse(localStorage.getItem("myPokemonList")));
  }, []);

  return (
    <Container>
      {!myPokemon ? (
        <Text>
          You don't own any.
          <br />
          Try to catch the pokemon.
        </Text>
      ) : (
        myPokemon.map((pokemon) =>
          pokemon.id === id ? (
            <Items>
              <Text bold>{toTitleCase(pokemon.nickname)}</Text>
              <Button
                red
                type="button"
                onClick={() => toggleReleaseModal(pokemon.nickname)}
              >
                Release
              </Button>
            </Items>
          ) : null
        )
      )}
    </Container>
  );
};

export default PokemonOwned;
