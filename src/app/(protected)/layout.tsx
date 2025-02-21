import Grid from "@mui/material/Grid2";
import * as React from "react";

function AuthLayout(props: { children: React.ReactNode }) {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 6, md: 2.16 }}>
        <div>xs=8</div>
      </Grid>
      <Grid size={{ xs: 6, md: 9.84 }} sx={{ backgroundColor: "primary.main" }}>
        {props.children}
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
