"use client";
import {
  createContext,
  ReactNode,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
interface AuthInfo {
  isAuthed: boolean;
  token: string;
}
export const AuthContext = createContext<AuthInfo>({
  isAuthed: false,
  token: "",
});
const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authInfo, setAuthInfo] = useState<AuthInfo>({
    isAuthed: false,
    token: "",
  });
  useLayoutEffect(() => {
    setAuthInfo({
      isAuthed: !!localStorage.getItem("token"),
      token: localStorage.getItem("token") || "",
    });
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

const useAuth = () => {
  const authInfo = useContext(AuthContext);
  return authInfo;
};

export { AuthProvider, useAuth };
