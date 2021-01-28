import React, { useEffect, useState } from "react";
import LoadingPage from "../../Components/LoadingPage";
import PokemonCard from "./PokemonCard";

const MyPokemonList = () => {
  const [loading, setLoading] = useState(true);
  const [myPokemon, setMyPokemon] = useState([]);

  useEffect(() => {
    setLoading(true);
    setMyPokemon(JSON.parse(localStorage.getItem("myPokemonList")));
    setLoading(false);
  }, []);
  // const myPokemonList = JSON.parse(localStorage.getItem("myPokemonList"));

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        myPokemon.map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            name={pokemon.name}
            img={pokemon.sprites}
            nickname={pokemon.nickname}
          />
        ))
      )}
    </>
  );
};

export default MyPokemonList;
