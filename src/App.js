import styled, { createGlobalStyle } from "styled-components";
import TelaLogin from "./components/TelaLogin/TelaLogin";
import TelaCadastro from "./components/TelaCadastro/TelaCadastro";
import TelaPrincipal from "./components/TelaPrincipal/TelaPrincipal.js";
import { useState } from "react";

const GlobalStyled = createGlobalStyle`
  html {
    font-family: sans-serif9;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;
const MainContainer = styled.main`
  height: 100vh;
`;

function App() {
  const [tela, setTela] = useState("1");

  const trocarTela = (tela) => {
    switch (tela) {
      case "login":
        return <TelaLogin tela={tela} setTela={setTela} />;

      case "cadastro":
        return <TelaCadastro tela={tela} setTela={setTela} />;

      case "principal":
        return <TelaPrincipal tela={tela} setTela={setTela} />;

      default:
        return <TelaLogin tela={tela} setTela={setTela} />;
    }
  };

  return (
    <MainContainer>
      <GlobalStyled />
      {trocarTela(tela)}
    </MainContainer>
  );
}

export default App;
