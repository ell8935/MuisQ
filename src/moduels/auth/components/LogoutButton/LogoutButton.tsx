import React, { useContext } from "react";
import { AuthContext } from "../../../../shared/context/auth";

const LogoutButton = () => {

  const handleLogout = async () => {
    try {
      // await logout();
    } catch (error) {
      // console.log(error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
