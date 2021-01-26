import React from "react";
import styled from "@emotion/styled";
import logo from "../../Images/logo.png";

const Container = styled.div`
  background-color: red;
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem;
`;

const MenuWrap = styled.div`
  max-width: 1300px;
  margin: 0 auto;
`;

const Logo = styled.img`
  height: 2rem;
`;

const NavBar = () => {
  return (
    <Container>
      <MenuWrap>
        <Logo src={logo} alt="Pokemon" />
      </MenuWrap>
    </Container>
  );
};

export default NavBar;
