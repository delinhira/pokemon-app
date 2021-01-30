import React, { useContext, useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { toTitleCase } from "../../../helper";
import { Button, Text } from "../../Components/Components";
import { ModalContext } from "../../../Context/ModalContext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 0 auto;
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: white;
  border: 1px solid lightgray;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  margin: 0.25rem 0;

  p {
    margin: auto 0;
  }
`;

const PokemonOwned = ({ id }) => {
  const [myPokemon, setMyPokemon] = useState([]);
  const { toggleReleaseModal } = useContext(ModalContext);

  useEffect(() => {
    setMyPokemon(
      JSON.parse(localStorage.getItem("myPokemonList")).filter(
        (thisPokemon) => thisPokemon.id === id
      )
    );
  }, [id]);

  const noPokemonRender = () => {
    return <Text mb>You don't own any of this pokemon.</Text>;
  };

  return (
    <Container>
      {!myPokemon || myPokemon.length === 0
        ? noPokemonRender()
        : myPokemon.map((pokemon, index) => (
            <Items key={index}>
              <Text bold>{toTitleCase(pokemon.nickname)}</Text>
              <Button
                red
                type="button"
                onClick={() => toggleReleaseModal(pokemon.nickname)}
              >
                Release
              </Button>
            </Items>
          ))}
    </Container>
  );
};

export default PokemonOwned;
