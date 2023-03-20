import { useDispatch } from "react-redux";
import { setAuth } from "../../../../shared/redux/reducers/authSlice";
import { AppDispatch } from "../../../../shared/redux/store";
import { loginWithGoogle } from "../../../../shared/services/firebase";
import LoginScreenStyled from "./LoginScreenStyled";

function LoginScreen() {
  const dispatch: AppDispatch = useDispatch();

  const login = async () => {
    const user = await loginWithGoogle();

    if (user) {
      return dispatch(setAuth(user));
    }

    // handle here user is null
  };

  return (
    <LoginScreenStyled>
      <h2>Log in to join a chat room!</h2>
      <div>
        <button onClick={login} className="login">
          Login with Google
        </button>
      </div>
    </LoginScreenStyled>
  );
}

export default LoginScreen;
