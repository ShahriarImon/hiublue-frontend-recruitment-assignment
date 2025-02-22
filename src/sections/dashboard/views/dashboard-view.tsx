"use client";

import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
} from "@mui/material";
import { useState } from "react";
import Summery from "../components/Summery";

export default function DashboardView() {
  const [filter, setFilter] = useState<string>("this-week");

  const handleFilter = (event: SelectChangeEvent) => {
    setFilter(event.target.value);
  };

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
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <div style={{ fontSize: "1.5rem", fontWeight: 700 }}>Dashboard</div>{" "}
        <FormControl sx={{ minWidth: 120 }}>
          <Select
            value={filter}
            onChange={handleFilter}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              "& .MuiSelect-select": {
                padding: 1,
                fontWeight: 600,
                fontSize: "0.875rem",
              },
            }}
          >
            <MenuItem value={"this-week"}>This Week</MenuItem>
            <MenuItem value={"last-week"}>Last Week</MenuItem>
          </Select>
        </FormControl>
      </Stack>

      <Summery filter={filter} />
    </Stack>
  );
}
