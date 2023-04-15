import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginWithGoogle } from "../../services/authServies";
import { AppDispatch } from "../../../../shared/redux/store";
import { setAuth } from "../../../../shared/redux/reducers/authSlice";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";
import { User } from "firebase/auth";

interface Props {
  className?: string;
}

const LoginButton = ({ className }: Props) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    const roomId = localStorage.getItem("roomId");

    if (roomId) {
      localStorage.removeItem("roomId");
      navigate(`/room?id=${roomId}`);
      return;
    }
    navigate("/");
  };

  const login = async () => {
    const user = await loginWithGoogle();

    if (user) {
      handleNavigate();
      return dispatch(setAuth(user));
    }
  };

  return <CustomButton className={className} onClick={login} label="Login with Google" />;
};

export default LoginButton;
