import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../Images/logo.png";

// Styled Components
const Container = styled.div`
  background-color: ${(props) => props.theme.colors.red};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 0.5rem;
  z-index: 1;
`;

const MenuWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const NavLink = styled.div`
  a {
    text-decoration: none;
    font-weight: 600;
    color: gray;
    margin: 0 0.5rem;
  }
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const NavBar = () => {
  return (
    <Container>
      <div>
        <MenuWrap>
          <Link to="/pokemon">
            <Logo src={logo} alt="Pokemon" />
          </Link>
          <NavLink>
            <Link to="/pokemon">Home</Link>
            <Link to="/my-pokemon">My Pokemon</Link>
          </NavLink>
        </MenuWrap>
      </div>
    </Container>
  );
};

export default NavBar;
