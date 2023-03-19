import { onAuthStateChanged } from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { googleLogout, loginWithGoogle } from "../services/firebase";
import { getAuth } from "firebase/auth";

interface AuthContextValue {
  user: any;
  login: () => Promise<void>;
  logout: () => void;
}

 const AuthContext = createContext<AuthContextValue | null>(null);
const auth = getAuth();

const AuthProvider = (props:any) => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const login = async () => {
    const user = await loginWithGoogle();

    if (!user) {
      // TODO: Handle failed login
    }

    setUser(user);
  };

  const logout = async () => {
    googleLogout();
  };

  const value: AuthContextValue = { user, login, logout };

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthContext , AuthProvider };


