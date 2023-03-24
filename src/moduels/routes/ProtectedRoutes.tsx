import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../../shared/redux/store";

const ProtectedRoutes = () => {
  const user = useSelector((state: RootState) => state.auth);

  return user.uid ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
