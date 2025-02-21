import CheckAuthentication from "@/components/authentication/CheckAuthentication";

export const metadata = {
  title: "Dashboard",
};

export default function Page() {
  return (
    <>
      <CheckAuthentication />
    </>
  );
}
