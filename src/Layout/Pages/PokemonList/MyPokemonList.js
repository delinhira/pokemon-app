import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import LoadingPage from "../../Components/LoadingPage";
import PokemonCard from "./PokemonCard";
import { Text } from "../../Components/Components";
import ReleasePokemon from "../../Components/Modals/ReleasePokemon";

const Container = styled.div`
  padding: 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 100;
`;

const MyPokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    setLoading(true);
    setMyPokemon(JSON.parse(localStorage.getItem("myPokemonList")));
    setLoading(false);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : !myPokemon || myPokemon.length === 0 ? (
        <Text sm pt pb bold shadow>
          You don't own any pokemon.
        </Text>
      ) : (
        <Container>
          <Text md bold mb>
            You have {myPokemon.length}{" "}
            {myPokemon.length > 1 ? "pokemons" : "pokemon"}
          </Text>
          {myPokemon.map((pokemon) => (
            <PokemonCard
              key={pokemon.id}
              name={pokemon.name}
              img={pokemon.sprites}
              nickname={pokemon.nickname}
            />
          ))}
          <ReleasePokemon />
        </Container>
      )}
    </>
  );
};

export default MyPokemonList;
