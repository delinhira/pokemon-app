import React, { useState } from "react";
import styled from "@emotion/styled";
import { Text } from "../../Components/Components";
import PokemonAbout from "./PokemonAbout";
import PokemonMoves from "./PokemonMoves";
import PokemonOwned from "./PokemonOwned";

// Styled Components
const Container = styled.div`
  box-sizing: border-box;
  border: 2px solid ${(props) => props.theme.colors.yellow};
  border-radius: 10px;
  padding: 1rem;

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
    padding: 0.25rem 0;
    margin-bottom: 1rem;
  }
`;

const Option = styled.div`
  box-sizing: border-box;
  font-weight: 600;
  color: ${(props) => props.theme.colors.white};
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  padding: 0.5rem 1rem;
  margin: 0 0.25rem;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.yellow};
  }

  &.active {
    color: white;
    background-color: ${(props) => props.theme.colors.yellow};
  }
`;

const Options = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  padding: 1rem 0;
`;

const DetailTabs = ({ pokemon }) => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <>
      <Options>
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
      </Options>
      <Container>
        {activeTab === "about" && (
          <>
            <Text md mb bold>
              About
            </Text>
            <PokemonAbout
              abilities={pokemon.abilities}
              stats={pokemon.stats}
              type={pokemon.types}
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
