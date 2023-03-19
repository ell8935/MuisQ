import { Provider } from "react-redux";
import { UnauthenticatedApp } from "./moduels/auth/components/UnauthenticatedApp/UnauthenticatedApp";
import MainScreen from './moduels/main/screens/MainScreen/MainScreen'
import { store } from "./shared/redux/store";

function App() {
  return (<>
    <Provider store={store}>
        <MainScreen /> 
    </Provider>
  </>
  );
}
export default App;

