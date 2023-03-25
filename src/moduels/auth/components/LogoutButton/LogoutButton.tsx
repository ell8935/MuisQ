import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../shared/redux/store";
import { clearAuth } from "../../../../shared/redux/reducers/authSlice";
import CustomButton from "../../../../shared/components/CustomButton/CustomButton";
import { googleLogout } from "../../../../shared/services/firebaseServices/authServies";

const LogoutButton = () => {
  const dispatch: AppDispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await googleLogout();
      dispatch(clearAuth());
    } catch (error) {
      console.log(error);
    }
  };

  return <CustomButton label="Logout" onClick={handleLogout} />;
};

export default LogoutButton;
