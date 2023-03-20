import { useEffect } from "react";
import { Provider } from "react-redux";
import LoginScreen from "./moduels/auth/screens/LoginScreen/LoginScreen";
import MainScreen from "./moduels/main/screens/MainScreen/MainScreen";
import Routes from "./moduels/Routes/Routes";
import { store } from "./shared/redux/store";

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}
export default App;
