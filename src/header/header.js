import React from "react";
import Logo from "../images/logo.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 8vh;
  position: fixed;
  width: 100%;
`;
const DivHeader = styled.div`
  width: 33%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
`;
const List = styled.ul`
  display: flex;
  justify-content: space-evenly;
  width: 40%;

  li {
    list-style: none;
    color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.3rem;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <DivHeader justifyContent="flex-start">
        <img src={Logo} alt="logo" />
      </DivHeader>
      <DivHeader justifyContent="center">
        <List>
          <li>Filmes </li>
          <li> Series </li>
        </List>
      </DivHeader>
      <DivHeader justifyContent="flex-end">
        <img />
        <List>
          <li> Filtro </li>
          <li> Login </li>
        </List>
      </DivHeader>
    </HeaderContainer>
  );
}
