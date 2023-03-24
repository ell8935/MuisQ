import { useDispatch } from "react-redux";
import { clearAuth } from "../../../../shared/redux/reducers/authSlice";
import { AppDispatch } from "../../../../shared/redux/store";
import { googleLogout } from "../../../../shared/services/firebase";

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

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
