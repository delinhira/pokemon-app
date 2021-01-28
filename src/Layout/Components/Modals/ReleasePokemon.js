import styled from "@emotion/styled";
import React, { useContext } from "react";
import { ModalContext } from "../../../Context/ModalContext";
import { Button, Modal, Overlay, Text } from "../Components";

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ReleasePokemon = ({ nickname }) => {
  const { pokemonNickname, releaseModal, toggleReleaseModal } = useContext(
    ModalContext
  );
  console.log("modal", pokemonNickname, nickname);
  const releasePokemon = () => {};

  return (
    <Overlay display={releaseModal}>
      <Modal>
        <Text>Release {nickname}?</Text>
        <ButtonContainer>
          <Button type="button" onClick={releasePokemon}>
            Confirm
          </Button>
          <Button red type="button" onClick={toggleReleaseModal}>
            Cancel
          </Button>
        </ButtonContainer>
      </Modal>
    </Overlay>
  );
};

export default ReleasePokemon;
