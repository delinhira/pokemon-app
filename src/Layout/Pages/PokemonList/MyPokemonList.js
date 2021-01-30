import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ModalContext } from "../../../Context/ModalContext";
import { Text } from "../../Components/Components";
import LoadingPage from "../../Components/LoadingPage";
import PokemonCard from "./PokemonCard";
import ReleasePokemon from "../../Components/Modals/ReleasePokemon";

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Container = styled.div`
  padding: 2rem;
`;

const MyPokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [myPokemon, setMyPokemon] = useState([]);
  const { releaseModal } = useContext(ModalContext);

  useEffect(() => {
    setLoading(true);
    setMyPokemon(JSON.parse(localStorage.getItem("myPokemonList")));
    setLoading(false);
  }, [releaseModal]);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : !myPokemon || myPokemon.length === 0 ? (
        <Text sm pt pb bold shadow>
          You don't have any pokemon.
        </Text>
      ) : (
        <Container>
          <Text md bold mb>
            You have {myPokemon.length}{" "}
            {myPokemon.length > 1 ? "pokemons" : "pokemon"}
          </Text>
          <CardsContainer>
            {myPokemon.map((pokemon, index) => (
              <PokemonCard
                key={index}
                name={pokemon.name}
                img={pokemon.sprites}
                nickname={pokemon.nickname}
              />
            ))}
          </CardsContainer>
          <ReleasePokemon />
        </Container>
      )}
    </>
  );
};

export default MyPokemonList;
