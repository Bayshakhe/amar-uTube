import { YouTube } from "@mui/icons-material";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  Typography,
} from "@mui/material";
import React from "react";

const CustomeListItem = ({ logo, name, color, fontWeight, hoverColor }) => {
  return (
    <ListItem
      sx={{
        "&:hover": {
          color: hoverColor,
        },
      }}
    >
      <ListItemButton sx={{ width: "250px" }}>
        <ListItemIcon
          sx={{
            color: color,
            "&:hover": {
              color: hoverColor,
            },
          }}
        >
          {logo}
        </ListItemIcon>
        <Typography sx={{ fontWeight: fontWeight }}>{name}</Typography>
      </ListItemButton>
    </ListItem>
  );
};

export default CustomeListItem;
