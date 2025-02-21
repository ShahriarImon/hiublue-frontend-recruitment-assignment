"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

// export const metadata = {
//   title: "Dashboard",
// };

export default function Page() {
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      redirect("/login");
    } else {
      redirect("/dashboard");
    }
  }, []);

  return null;
  // <>
  //   <CheckAuthentication />
  // </>
}
