import { Div, Titulo } from "./styled";

function TelaPrincipal({ tela, setTela }) {
  const deslogar = (tela) => {
    // validação de logout ainda será visto mais pra frente no curso
    setTela("login");
  };

  return (
    <Div>
      <Titulo>Tela Principal</Titulo>
      <p>Boas-vindas à aplicação!</p>
      <button onClick={deslogar}>Deslogar</button>
    </Div>
  );
}

export default TelaPrincipal;
