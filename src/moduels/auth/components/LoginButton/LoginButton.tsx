import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../services/authServies";
import { AppDispatch } from "../../../../shared/redux/store";
import { setAuth } from "../../../../shared/redux/reducers/authSlice";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";

interface Props {
  className?: string;
}

const LoginButton = ({ className }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const login = async () => {
    const user = await loginWithGoogle();

    if (user) {
      navigate("/");
      return dispatch(setAuth(user));
    }
  };

  return <CustomButton className={className} onClick={login} label="Login with Google" />;
};

export default LoginButton;
