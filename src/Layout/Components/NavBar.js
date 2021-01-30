import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../Images/logo.png";

// Styled Components
const Container = styled.div`
  left: 0;
  padding: 0.5rem 1rem;
  position: fixed;
  top: 0;
  width: 100vw;
  // Background
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  opacity: 1;
  background-image: linear-gradient(135deg, #ef1c24 25%, transparent 25%),
    linear-gradient(225deg, #ef1c24 25%, transparent 25%),
    linear-gradient(45deg, #ef1c24 25%, transparent 25%),
    linear-gradient(315deg, #ef1c24 25%, #d71920 25%);
  background-position: 4px 0, 4px 0, 0 0, 0 0;
  background-size: 4px 4px;
  background-repeat: repeat;
`;

const MenuWrap = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 1200px;
`;

const NavLinkContainer = styled.div`
  a {
    color: ${(props) => props.theme.colors.white};
    font-weight: 600;
    margin: 0 1rem;
    text-decoration: none;
  }
  .active {
    border-bottom: 2px solid ${(props) => props.theme.colors.yellow};
    color: white;
  }
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const NavBar = () => {
  const pathName = useLocation().pathname;

  return (
    <Container>
      <MenuWrap>
        <Link to="/pokemon">
          <Logo src={logo} alt="Pokemon" />
        </Link>
        <NavLinkContainer>
          <Link
            to="/pokemon"
            className={pathName === "/pokemon" ? "active" : ""}
          >
            Home
          </Link>
          <Link
            to="/my-pokemon"
            className={pathName === "/my-pokemon" ? "active" : ""}
          >
            My Pokemon
          </Link>
        </NavLinkContainer>
      </MenuWrap>
    </Container>
  );
};

export default NavBar;
