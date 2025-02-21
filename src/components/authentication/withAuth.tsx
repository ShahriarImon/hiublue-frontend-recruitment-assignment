"use client";

import { useAuth } from "./useAuth";

const withAuth = (Component: any) => {
  interface WithAuthProps {
    [key: string]: any;
  }

  const AuthenticatedComponent: React.FC<any> = (props) => {
    // const token = localStorage.getItem("token");

    const authInfo = useAuth();
    // useEffect(() => {
    //   if (!token) {
    //     redirect("/login");
    //   }
    // }, []);

    if (!authInfo?.token) {
      return <>Loading...</>;
    }

    return <Component {...props} />;
  };

  return AuthenticatedComponent;
};

export default withAuth;
