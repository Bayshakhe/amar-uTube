import { AddOutlined, HelpOutline, Menu, YouTube } from "@mui/icons-material";
import { IconButton, Stack } from "@mui/material";
import React from "react";

const SideBar = ({ menubarOpen, setMenubarOpen }) => {
  return (
    <Stack
      sx={{
        backgroundColor: "#0747a6",
        width: "70px",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
      }}
    >
      <Stack>
        <IconButton
          onClick={() => setMenubarOpen(!menubarOpen)}
          sx={{ color: "white" }}
        >
          <Menu sx={{ fontSize: "30px" }} />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <YouTube sx={{ fontSize: "30px" }} />
        </IconButton>
        <IconButton sx={{ color: "white" }}>
          <AddOutlined sx={{ fontSize: "30px" }} />
        </IconButton>
      </Stack>
      <Stack sx={{ position: "fixed", bottom: "10px", left: "7px" }}>
        <IconButton sx={{ color: "white" }}>
          <HelpOutline sx={{ fontSize: "30px" }} />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default SideBar;
