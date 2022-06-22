import * as React from "react";

import { styled } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import { Typography } from "@mui/material";

import SocialMedia from "../SocialMedia/SocialMedia";

import "./Menu.scss";

interface MenuProps {
  withColor?: boolean;
}

function Menu({ withColor = false }: MenuProps) {
  const drawerWidth = 240;

  const DrawerHeader = styled("div")(() => ({
    display: "flex",
    alignSelf: "flex-end",
    justifyContent: "flex-end",
  }));

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header
        className={`headerContainer ${
          withColor ? "headerContainer--withColor" : ""
        }`}
      >
        <IconButton
          onClick={handleDrawerOpen}
          style={{ backgroundColor: "transparent" }}
        >
          <img
            className="headerContainer__logo"
            src="./../assets/music-menu.png"
            alt="Music Logo"
          />
          <p className="headerContainer__text">menú</p>
        </IconButton>
      </header>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "black",
            color: "white",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <p style={{ color: "white" }}>X</p>
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            alignSelf: "center",
            justifyContent: "center",
            textAlign: "center",
            height: "80%",
          }}
        >
          {[
            { text: "QUI SOM", link: "/about" },
            { text: "QUÈ ES UN BINGO MUSICAL", link: "/description" },
            { text: "FOTOS", link: "/pictures" },
            { text: "CONTACTE", link: "/contact" },
          ].map((index) => (
            <a className="menu__text" href={index.link} key={index.link}>
              <ListItem
                button
                key={index.text}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "center",
                }}
              >
                <Typography fontWeight={600} fontSize="18px">
                  {index.text}
                </Typography>
              </ListItem>
            </a>
          ))}
          <div className="headerContainer__socialMedia">
            <SocialMedia size />
          </div>
        </List>
      </Drawer>
    </>
  );
}

export default Menu;
