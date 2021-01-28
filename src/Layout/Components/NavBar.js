import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../Images/logo.png";

// Styled Components
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.red};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 0.5rem;
  z-index: 1;
  box-sizing: border-box;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const MenuWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLinkContainer = styled.div`
  a {
    text-decoration: none;
    font-weight: 600;
    color: ${(props) => props.theme.colors.blue};
    margin: 0 1rem;
  }
  .active {
    color: ${(props) => props.theme.colors.yellow};
    border-bottom: 2px solid ${(props) => props.theme.colors.yellow};
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
