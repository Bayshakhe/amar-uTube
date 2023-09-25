import {
  AccessTimeOutlined,
  FavoriteBorderOutlined,
  Home,
  HomeOutlined,
  PlaylistPlayOutlined,
  YouTube,
} from "@mui/icons-material";
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Menu,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import CustomeListItem from "../components/CustomeListItem";

const MenuBar = () => {
  return (
    <List
      sx={{
        backgroundColor: "#f4f5f7",
        width: "220px",
        marginLeft: "70px",
        padding: "20px",
        height: "94vh",
      }}
    >
      <CustomeListItem
        logo={<YouTube fontSize="large" />}
        name="Amar UTube"
        fontWeight="bold"
        color="#c61b1f"
      />
      <CustomeListItem
        logo={<HomeOutlined />}
        name="Home"
        color="black"
        hoverColor="#0747a6"
      />
      <CustomeListItem
        logo={<AccessTimeOutlined />}
        name="Recents"
        color="black"
        hoverColor="#0747a6"
      />
      <CustomeListItem
        logo={<PlaylistPlayOutlined />}
        name="Playlists"
        color="black"
        hoverColor="#0747a6"
      />
      <CustomeListItem
        logo={<FavoriteBorderOutlined />}
        name="Favorites"
        color="black"
        hoverColor="#0747a6"
      />
    </List>
  );
};

export default MenuBar;
