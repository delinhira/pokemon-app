import React, { useContext, useEffect, useState } from "react";
import styled from "@emotion/styled";
import { ModalContext } from "../../../Context/ModalContext";
import { toTitleCase } from "../../../helper";
import { Button, Modal, Overlay, Text } from "../Components";
import pokeball from "../../../Images/pokeball.gif";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ReleasePokemon = () => {
  const [loading, setLoading] = useState(false);
  const [released, setReleased] = useState();
  const { pokemonNickname, releaseModal, toggleReleaseModal } = useContext(
    ModalContext
  );

  useEffect(() => {
    if (releaseModal) {
      document.body.style.overflowY = "hidden";
      setReleased(false);
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [releaseModal]);

  const releaseHandle = () => {
    setLoading(true);

    let myPokemonList = JSON.parse(localStorage.getItem("myPokemonList"));
    myPokemonList = myPokemonList.filter(
      (pokemon) => pokemon.nickname !== pokemonNickname
    );
    localStorage.setItem("myPokemonList", JSON.stringify(myPokemonList));

    setTimeout(() => {
      setLoading(false);
      setReleased(true);
    }, 3000);
  };

  const loadingRender = () => {
    return (
      <>
        <Text sm bold>
          Releasing {toTitleCase(pokemonNickname)}...
        </Text>
        <img src={pokeball} alt="pokeball" />
      </>
    );
  };

  const modalContentRender = () => {
    if (released) {
      return (
        <>
          <Text sm mb bold>
            {toTitleCase(pokemonNickname)} has been released :D
          </Text>
          <Button type="button" onClick={() => toggleReleaseModal("")}>
            OK
          </Button>
        </>
      );
    } else {
      return (
        <>
          <Text sm mb bold>
            Release {pokemonNickname}?
          </Text>
          <ButtonContainer>
            <Button type="button" onClick={releaseHandle}>
              Confirm
            </Button>
            <Button red type="button" onClick={() => toggleReleaseModal("")}>
              Cancel
            </Button>
          </ButtonContainer>
        </>
      );
    }
  };

  return (
    <Overlay display={releaseModal ? "true" : undefined}>
      <Modal>
        {!releaseModal
          ? null
          : loading
          ? loadingRender()
          : modalContentRender()}
      </Modal>
    </Overlay>
  );
};

export default ReleasePokemon;
