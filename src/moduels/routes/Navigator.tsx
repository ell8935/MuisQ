import ProtectedRoutes from "./ProtectedRoutes";
import MainScreen from "../main/screens/MainScreen/MainScreen";
import LoginScreen from "../auth/screens/LoginScreen/LoginScreen";
import { RoomScreen } from "../main/screens/RoomsScreen/RoomsScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "../../shared/theme/theme";

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
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default Navigator;
