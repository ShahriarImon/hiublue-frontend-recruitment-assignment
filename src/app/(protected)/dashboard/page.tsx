import OfferTable from "@/sections/dashboard/components/offerTable/OfferTable";
import dynamic from "next/dynamic";
// import DashboardView from "@/sections/dashboard/views/dashboard-view";
const DashboardView = dynamic(
  () => import("@/sections/dashboard/views/dashboard-view"),
  {
    ssr: false,
  }
);

const Dashboard = () => {
  return (
    <DashboardView>
      <OfferTable />
    </DashboardView>
  );
};

export default Dashboard;
