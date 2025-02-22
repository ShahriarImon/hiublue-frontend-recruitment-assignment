import dynamic from "next/dynamic";
// import DashboardView from "@/sections/dashboard/views/dashboard-view";
const DashboardView = dynamic(
  () => import("@/sections/dashboard/views/dashboard-view"),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  return <DashboardView />;
};

export default Dashboard;
