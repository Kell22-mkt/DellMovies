import React from "react";
import Avatar from "../images/avatar.png";
import styled from "styled-components";

const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  height: 80vh;
  background-image: url(${Avatar});
  background-size: cover;
`;
const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 80%;
  height: 40vh;
  color: #f2f2f2;
  font-family: Arial, Helvetica, sans-serif;

  p {
    width: 40%;
    font-size: 1.1rem;
  }
`;
const ButtonDiv = styled.div``;
const ButtonAssistir = styled.button`
  width: 10vw;
  height: 6vh;
  border-radius: 10px;
  border: none;
  background: #d53a00;
  color: #f2f2f2;
  font-weight: bold;
  padding: 10px 20px;
  justify-content: center;
  margin: 0 8px;
`;
const ButtonTrailer = styled.button`
  width: 10vw;
  height: 6vh;
  border-radius: 10px;
  border: none;
  background: #717171;
  color: #f2f2f2;
  font-weight: bold;
  padding: 10px 20px;
  justify-content: center;
`;

export default function Main() {
  return (
    <MainContainer>
      <MainContent>
        <h2> Avatar: o Caminho da Água </h2>
        <h4>3hr 23 min | Fantasia, Família | 2023 </h4>
        <h3>9,9</h3>
        <p>
          Após formar uma família, Jake Sully e Ney'tiri fazem de tudo para
          ficarem juntos. No entanto, eles devem sair de casa e explorar as
          regiões de Pandora quando uma antiga ameaça ressurge, e Jake deve
          travar uma guerra difícil contra os humanos.{" "}
        </p>
        <ButtonDiv>
          <ButtonAssistir> Assitir Agora </ButtonAssistir>
          <ButtonTrailer> Trailer </ButtonTrailer>
        </ButtonDiv>
      </MainContent>
    </MainContainer>
  );
}
