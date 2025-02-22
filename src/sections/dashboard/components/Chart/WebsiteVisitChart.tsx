"use client";
import { Box, Card, Stack } from "@mui/material";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import { Visits, VisitsStat } from "../../views/dashboard-view";

// Dynamically import ApexCharts to avoid SSR issues
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

// interface DeviceCount {
//   desktop: number;
//   mobile: number;
// }

// interface VisitsStat {
//   monday: DeviceCount;
//   tuesday: DeviceCount;
//   wednesday: DeviceCount;
//   thursday: DeviceCount;
//   friday: DeviceCount;
//   saturday: DeviceCount;
//   sunday: DeviceCount;
// }
// interface OfferSentStat {
//   monday: number;
//   tuesday: number;
//   wednesday: number;
//   thursday: number;
//   friday: number;
//   saturday: number;
//   sunday: number;
// }

// interface Visits {
//   website_visits: VisitsStat;
//   offers_sent: OfferSentStat;
// }

const WebsiteVisitChart = ({
  filter,
  visits,
}: {
  filter: string;
  visits: Visits;
}) => {
  const orderedDays: (keyof VisitsStat)[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Process data for Website Visits Chart
  const websiteVisitsSeries = visits?.website_visits && [
    {
      name: "Desktop",
      data: orderedDays?.map((day) => visits.website_visits[day].desktop),
    },
    {
      name: "Mobile",
      data: orderedDays?.map((day) => visits.website_visits[day].mobile),
    },
  ];

  // Process data for Offers Sent Chart

  // Chart options for Website Visits (Line Chart)
  const websiteVisitsOptions: ApexOptions = {
    chart: {
      type: "bar" as "bar",
      height: 300,
      toolbar: {
        show: false, // Hide the menu button
      },
    },
    dataLabels: {
      enabled: false, // Hide data labels on the bars
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: categories,
    },
    yaxis: {
      title: { text: "" },
      min: 0,
      max: 200,
      tickAmount: 5,
    },
    colors: ["#007867", "#FFAB00"],
    legend: {
      position: "top" as "top",
      horizontalAlign: "right",

      fontWeight: 550,
      markers: {
        shape: "circle", // Change legend shape to circle
      },
    },
  };

  return (
    <Card sx={{ padding: "30px", paddingX: "15px", paddingBottom: "10px" }}>
      <Stack spacing={3}>
        <Box
          sx={{
            fontWeight: 600,
            fontSize: "1.125rem",
            paddingX: "15px",
            paddingBottom: "10px",
          }}
        >
          Website Visits
        </Box>
        <Chart
          options={websiteVisitsOptions}
          series={websiteVisitsSeries}
          type="bar"
          height={350}
        />{" "}
      </Stack>
    </Card>
  );
};

export default WebsiteVisitChart;
