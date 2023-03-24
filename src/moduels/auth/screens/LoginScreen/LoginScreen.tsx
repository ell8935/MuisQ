import LoginScreenStyled from "./LoginScreenStyled";
import LoginButton from "../../components/LoginButton/LoginButton";

function LoginScreen() {
  return (
    <LoginScreenStyled>
      <h2>Log in to join a chat room!</h2>
      <div>
        <LoginButton />
      </div>
    </LoginScreenStyled>
  );
}

export default LoginScreen;
