import React, { useState } from "react";
import styled from "@emotion/styled";
import { Text } from "../../Components/Components";
import PokemonAbout from "./PokemonAbout";
import PokemonMoves from "./PokemonMoves";
import PokemonOwned from "./PokemonOwned";

// Styled Components
const Container = styled.div`
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 10px;
  box-sizing: border-box;
  padding: 1rem;
  padding-bottom: 1.5rem;

  // Background
  background-color: #f9f9f9;
  opacity: 1;
  background-image: linear-gradient(135deg, #efefef 25%, transparent 25%),
    linear-gradient(225deg, #efefef 25%, transparent 25%),
    linear-gradient(45deg, #efefef 25%, transparent 25%),
    linear-gradient(315deg, #efefef 25%, #f9f9f9 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;

  .title {
    background-color: ${(props) => props.theme.colors.yellow};
    margin-bottom: 1rem;
    padding: 0.25rem 0;
  }
`;

const Option = styled.div`
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.white};
  font-weight: 600;
  margin: 0.25rem;
  padding: 0.5rem 1rem;

  &:hover {
    background-color: ${(props) => props.theme.colors.yellow};
    color: white;
  }
  &.active {
    background-color: ${(props) => props.theme.colors.yellow};
    color: white;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem 0;
`;

const DetailTabs = ({ pokemon }) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <OptionsContainer>
        <Option
          className={activeTab === "about" ? "active" : ""}
          onClick={() => setActiveTab("about")}
        >
          About
        </Option>
        <Option
          className={activeTab === "moves" ? "active" : ""}
          onClick={() => setActiveTab("moves")}
        >
          Moves
        </Option>
        <Option
          className={activeTab === "owned" ? "active" : ""}
          onClick={() => setActiveTab("owned")}
        >
          Owned
        </Option>
      </OptionsContainer>
      <Container>
        {activeTab === "about" && (
          <>
            <Text md mb bold>
              About
            </Text>
            <PokemonAbout
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              types={pokemon.types}
            />
          </>
        )}
        {activeTab === "moves" && (
          <>
            <Text md mb bold>
              Moves
            </Text>
            <PokemonMoves moves={pokemon.moves} />
          </>
        )}
        {activeTab === "owned" && (
          <>
            <Text md mb bold>
              Owned
            </Text>
            <PokemonOwned id={pokemon.id} />
          </>
        )}
      </Container>
    </>
  );
};

export default DetailTabs;
