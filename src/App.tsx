import { Provider } from "react-redux";
import { store } from "./shared/redux/store";
import Navigator from "./moduels/routes/Navigator";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Navigator />
      </QueryClientProvider>
    </Provider>
  );
};
export default App;
