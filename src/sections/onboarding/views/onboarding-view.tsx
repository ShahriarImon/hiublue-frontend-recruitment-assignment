import { Box, Card, Stack } from "@mui/material";

export default function OnboardingView() {
  return (
    <Stack
      direction={"column"}
      spacing={3}
      style={{
        margin: "15px",
        marginTop: "10px",
        marginRight: "115px",
        lineHeight: "1",
      }}
    >
      <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
        <Card
          sx={{
            padding: "30px",
            paddingX: "15px",
            paddingBottom: "10px",
            width: { xs: "95%", md: "66%" },
          }}
        >
          <Box sx={{ color: "#1C252E", fontSize: "1.125rem", fontWeight: 600 }}>
            Create Offer
          </Box>
          <Box
            sx={{
              padding: "30px",
              paddingX: "15px",
              paddingBottom: "10px",
              width: { xs: "95%", md: "66%" },
            }}
          ></Box>
          Onboarding View
        </Card>
      </Stack>
    </Stack>
  );
}
