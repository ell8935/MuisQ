/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginScreenStyled from "./LoginScreenStyled";
import { RootState } from "../../../../shared/redux/store";
import LoginButton from "../../components/LoginButton/LoginButton";
import { Abstract, MusiQWithName } from "../../../../shared/assets/images";
import CustomText from "../../../../shared/components/CustomText/CustomText";

const LoginScreen = () => {
  const user = useSelector((state: RootState) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user.uid) {
      navigate("/");
    }
  }, [user]);

  return (
    <LoginScreenStyled>
      <div className="abstractBox">
        <img src={Abstract} alt="abstract" />
      </div>

      <div className="loginBox">
        <div className="logo">
          <img src={MusiQWithName} alt="logo" />
        </div>
        <CustomText className="title" label="Log in to join the PARTY" />
        <LoginButton className="loginButton" />
      </div>

      <div className="top"></div>
      <div className="right"></div>
      <div className="bottom"></div>
      <div className="left"></div>
    </LoginScreenStyled>
  );
};

export default LoginScreen;
