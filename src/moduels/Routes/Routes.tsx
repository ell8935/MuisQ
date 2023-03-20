import LoginScreen from "../auth/screens/LoginScreen/LoginScreen";
import MainScreen from "../main/screens/MainScreen/MainScreen";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ChatRoom } from "../chat/components/ChatRoom/ChatRoom";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainScreen />,
    },
    {
      path: "/login",
      element: <LoginScreen />,
    },
    {
      path: "/room",
      element: <ChatRoom />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Routes;
