"use client";

import { redirect } from "next/navigation";
import { useLayoutEffect } from "react";
import { useAuth } from "./AuthProvider";

const withAuth = (Component: any) => {
  interface WithAuthProps {
    [key: string]: any;
  }

  const AuthenticatedComponent: React.FC<any> = (props) => {
    // const token = localStorage.getItem("token");

    const authInfo = useAuth();
    useLayoutEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        // if (!authInfo?.token) {
        redirect("/login");
      }
    }, []);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
