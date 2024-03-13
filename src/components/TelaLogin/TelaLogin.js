import {
  Form,
  FormContainer,
  Input,
  SendButton,
  StyledLabel,
  RegisterButton,
} from "./styled";

function TelaLogin({ tela, setTela }) {
  const login = (tela) => {
    // validação de login ainda será visto mais pra frente no curso
    setTela("principal");
  };

  const mostrarTelaCadastro = (tela) => {
    setTela("cadastro");
  };

  return (
    <FormContainer>
      <h1>LOGIN</h1>

      <Form>
        <StyledLabel>
          E-mail:
          <Input />
        </StyledLabel>

        <StyledLabel>
          Senha:
          <Input type={"password"} />
        </StyledLabel>

        <SendButton onClick={login}>Entrar</SendButton>

        <RegisterButton onClick={mostrarTelaCadastro}>
          Cadastre-se
        </RegisterButton>
      </Form>
    </FormContainer>
  );
}

export default TelaLogin;
