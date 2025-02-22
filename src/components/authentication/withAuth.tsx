"use client";

import { redirect, usePathname, useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { useAuth } from "./AuthProvider";

const withAuth = (Component: any) => {
  interface WithAuthProps {
    [key: string]: any;
  }

  const AuthenticatedComponent: React.FC<any> = (props) => {
    const pathname = usePathname();
    const router = useRouter();
    console.log("router2323:", router);
    console.log("pathname:", pathname);
    const authInfo = useAuth();
    useLayoutEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        redirect("/login");
      }
    }, []);

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
