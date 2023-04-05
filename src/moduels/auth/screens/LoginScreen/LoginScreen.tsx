import LoginScreenStyled from "./LoginScreenStyled";
import LoginButton from "../../components/LoginButton/LoginButton";

const LoginScreen = () => {
  return (
    <LoginScreenStyled>
      <h2>Log in to join</h2>
      <div>
        <LoginButton />
      </div>
    </LoginScreenStyled>
  );
};

export default LoginScreen;
