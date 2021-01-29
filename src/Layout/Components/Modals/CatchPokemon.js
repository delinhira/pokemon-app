import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import pokeball from "../../../Images/pokeball.gif";
import { ModalContext } from "../../../Context/ModalContext";
import { Button, Text } from "../Components";
import { toTitleCase } from "../../../helper";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 1rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
  }
  input {
    border: 2px solid ${(props) => props.theme.colors.yellow};
    border-radius: 5px;
    height: 2rem;
    padding: 0 0.5rem;
    width: 100%;
  }
`;

const Modal = styled.div`
  box-sizing: border-box;
  background-color: white;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  width: 100%;
  img {
    width: 50%;
  }
`;

const Overlay = styled.div`
  display: ${(props) => (props.display ? "flex" : "none")};
  min-height: 100vh;
  width: 100%;
  background: rgba(0, 0, 0, 0.3);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  box-sizing: border-box;
  padding: 0 2rem;
`;

const CatchPokemon = ({ pokemon }) => {
  const [pokemonNickname, setPokemonNickname] = useState();
  const [loading, setLoading] = useState(true);
  const [catched, setCatched] = useState(null);
  const [addSuccess, setAddsuccess] = useState(false);
  const [duplicateNickname, setDuplicateNickname] = useState(false);
  const { catchModal, toggleCatchModal } = useContext(ModalContext);

  useEffect(() => {
    if (catchModal) {
      setLoading(true);
      setDuplicateNickname(false);
      setAddsuccess(false);

      Math.random() < 0.5 ? setCatched(true) : setCatched(false);

      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  }, [catchModal]);

  const addMyPokemon = (e) => {
    e.preventDefault();

    const myPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      sprites: pokemon.sprites.front_default,
      nickname: pokemonNickname.toLowerCase(),
    };

    if (localStorage.getItem("myPokemonList")) {
      let myPokemonList = JSON.parse(localStorage.getItem("myPokemonList"));
      const checkDuplicate = myPokemonList.find(
        (pokemon) => pokemon.nickname === pokemonNickname.toLowerCase()
      );

      if (checkDuplicate) {
        setDuplicateNickname(true);
      } else {
        setAddsuccess(true);
        myPokemonList = [...myPokemonList, myPokemon];
        localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));
      }
    } else {
      setAddsuccess(true);
      localStorage.setItem("myPokemonList", JSON.stringify([myPokemon]));
    }
  };

  const loadingContent = () => {
    return (
      <>
        <Text sm bold>
          Catching {toTitleCase(pokemon.name)}...
        </Text>
        <img src={pokeball} alt="pokeball" />
      </>
    );
  };

  const resultContent = () => {
    if (catched) {
      if (addSuccess) {
        return (
          <>
            <Text sm mb bold>
              {toTitleCase(pokemonNickname)} is now added to your pokemon list!
              :D
            </Text>
            <Button type="button" onClick={toggleCatchModal}>
              OK
            </Button>
          </>
        );
      } else {
        return (
          <Form onSubmit={addMyPokemon}>
            <Text sm bold>
              Congratulation! You did it! <br /> Give it a nickname
            </Text>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <input
              required
              type="text"
              placeholder="Name your pokemon :D"
              onChange={(e) => setPokemonNickname(e.target.value)}
            />
            {duplicateNickname && (
              <Text bold red>
                You already use that nickname for other pokemon &gt;:(
              </Text>
            )}
            <ButtonContainer>
              <Button type="submit">OK</Button>
              <Button red onClick={toggleCatchModal}>
                Release
              </Button>
            </ButtonContainer>
          </Form>
        );
      }
    } else {
      return (
        <>
          <Text sm mb bold>
            Failed :( <br /> Try again next time.
          </Text>
          <Button type="button" onClick={toggleCatchModal}>
            OK
          </Button>
        </>
      );
    }
  };

  return (
    <Overlay display={catchModal ? true : undefined}>
      <Modal>{!loading ? resultContent() : loadingContent()}</Modal>
    </Overlay>
  );
};

export default CatchPokemon;
