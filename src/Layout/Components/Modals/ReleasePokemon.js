import React, { useContext, useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import styled from "@emotion/styled";
import { ModalContext } from "../../../Context/ModalContext";
import { toTitleCase } from "../../../helper";
import { Button, Text } from "../Components";
import pokeball from "../../../Images/pokeball.gif";
import { mq } from "../../../Theme";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Modal = styled.div`
  align-items: center;
  background-color: white;
  box-sizing: border-box;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  img {
    width: 50%;
  }
`;

const Overlay = styled.div`
  align-items: center;
  background: rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  display: ${(props) => (props.display ? "flex" : "none")};
  justify-content: center;
  left: 0;
  min-height: 100vh;
  padding: 0 2rem;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
`;

const mqModal = mq({
  width: ["100%", "60%", "30%"],
});

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
    }, 1000);
  };

  const closeHandle = () => {
    toggleReleaseModal("");
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
          <Button type="button" onClick={closeHandle}>
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
      <Modal css={mqModal}>
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
