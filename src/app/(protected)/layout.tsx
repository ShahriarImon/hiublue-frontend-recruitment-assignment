import DrawerComp from "@/components/drawer/DrawerComp";
import Navbar from "@/components/navbar/Navbar";

import Box from "@mui/material/Box";
import * as React from "react";

const drawerWidth = 280;

interface AuthLayoutProps {
  children: React.ReactNode;
}

function AuthLayout(props: AuthLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <Navbar drawerWidth={drawerWidth} />
      <DrawerComp drawerWidth={drawerWidth} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          mt: "64px",
        }}
      >
        {props.children}
      </Box>
    </Box>
    // <Grid container spacing={2}>
    //   <Grid size={{ xs: 6, md: 2.16 }}>
    //     <div>xs=8</div>
    //   </Grid>
    //   <Grid size={{ xs: 6, md: 9.84 }} sx={{ backgroundColor: "primary.main" }}>
    //     {props.children}
    //   </Grid>
    // </Grid>
  );
}

export default AuthLayout;
