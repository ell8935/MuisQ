import LoginScreenStyled from "./LoginScreenStyled";
import LoginButton from "../../components/LoginButton/LoginButton";
import CustomText from "../../../../shared/components/CustomText/CustomText";
import { Abstract, MusiQWithName } from "../../../../shared/assets/images";

const LoginScreen = () => {
  return (
    <LoginScreenStyled>
      <div className="abstractBox">
        <img src={Abstract} alt="Abstract" />
      </div>
      <div className="loginBox">
        <div className="logo">
          <img src={MusiQWithName} alt="logo" />
        </div>
        <CustomText className="title" label="Log in to join the PARTY" />
        <LoginButton className="loginButton" />
      </div>
    </LoginScreenStyled>
  );
};

export default LoginScreen;
