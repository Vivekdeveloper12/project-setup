import React from "react";
import { useContext } from "react";
import AuthContext from "./AuthContext";

const GetUserType = () => {
  const { user } = useContext(AuthContext);

    switch (user?.user_type || 'user') {
      case "SUPER_ADMIN": {
        return "admin";
      }
      case "USER": {
        return "user";
      }
      default: {
        return "user";
      }
    }
};

export default GetUserType;
