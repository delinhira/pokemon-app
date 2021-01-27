import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import pokeball from "../../Images/pokeball.gif";

const Overlay = styled.div`
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.toggle === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 2rem;
`;

const Modal = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  max-width: 500px;

  img {
    width: 50%;
  }
`;

const CatchPokemon = ({ pokemon }) => {
  const [toggle, setToggle] = useState(true);
  const [pokemonNickname, setPokemonNickname] = useState();
  const [catched, setCatched] = useState(null);

  const catchPokemon = () => {
    Math.random() < 0.5 ? setCatched(true) : setCatched(false);
    console.log("catched", catched);
  };

  const submitMyPokemon = (e) => {
    e.preventDefault();

    const myPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites.front_default,
      nickname: pokemonNickname,
    };

    if (localStorage.getItem("myPokemonList")) {
      let myPokemonList = JSON.parse(localStorage.getItem("myPokemonList"));
      myPokemonList = [...myPokemonList, myPokemon];
      localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));
    } else {
      localStorage.setItem("myPokemonList", JSON.stringify([myPokemon]));
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setToggle(false);
    }, 3000);
  }, []);

  return (
    <Overlay toggle={toggle}>
      <Modal>
        Catching Pokemon...
        <img src={pokeball} alt="pokeball" />
      </Modal>
    </Overlay>
  );
};

export default CatchPokemon;
