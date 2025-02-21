import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

export const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};
