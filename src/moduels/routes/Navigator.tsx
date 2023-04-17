import ProtectedRoutes from "./ProtectedRoutes";
import { theme } from "../../shared/theme/theme";
import { ThemeProvider } from "styled-components";
import MainScreen from "../main/screens/MainScreen/MainScreen";
import RoomScreen from "../main/screens/RoomsScreen/RoomsScreen";
import LoginScreen from "../auth/screens/LoginScreen/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "../auth/components/NotFound404/NotFound404";

const Navigator = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route element={<ProtectedRoutes />}>
            <Route path="/" element={<MainScreen />} />
            <Route path="/room" element={<RoomScreen />} />
          </Route>

          <Route path="/login" element={<LoginScreen />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Navigator;
