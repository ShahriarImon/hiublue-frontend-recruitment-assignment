import { AppBar, CssBaseline, Stack, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import ResponsiveMenuButton from "./ResponsiveMenuButton";
const Navbar = ({ drawerWidth }: { drawerWidth: number }) => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent={"space-between"}
            sx={{ width: "100%" }}
          >
            <Stack
              direction="row"
              spacing={2}
              alignItems="center"
              justifyContent={"flex-start"}
            >
              <ResponsiveMenuButton />
              <Typography variant="h6" noWrap component="div">
                Responsive drawer
              </Typography>
            </Stack>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent={"center"}
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "100%",
                border: "1px solid #00A76F",

                marginRight: "8px",
              }}
            >
              <Image
                src={"/avatar.svg"}
                width={36}
                height={36}
                alt=""
                style={{ borderRadius: "100%" }}
              />
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
