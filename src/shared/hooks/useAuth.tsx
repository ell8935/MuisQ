import { useContext } from "react";
import { AuthContext } from "../context/auth";

function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext's value is undefined.");  }

  return (
    authContext
  );
}

export { useAuth };
