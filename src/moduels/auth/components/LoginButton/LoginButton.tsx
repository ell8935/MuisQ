import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../../../shared/redux/store";
import { setAuth } from "../../../../shared/redux/reducers/authSlice";
import { loginWithGoogle } from "../../../../shared/services/firebaseServices/authServies";

const LoginButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    const user = await loginWithGoogle();

    if (user) {
      navigate("/");
      return dispatch(setAuth(user));
    }

    // handle here user is null
  };

  return <button onClick={login}>Login with Google</button>;
};

export default LoginButton;
