import React from "react";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "../../Images/logo.png";

// Styled Components
const Container = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 0.5rem;
`;

const MenuWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 2.5rem;
`;

const NavBar = () => {
  return (
    <Container>
      <MenuWrap>
        <Link to="/pokemon">
          <Logo src={logo} alt="Pokemon" />
        </Link>
      </MenuWrap>
    </Container>
  );
};

export default NavBar;
