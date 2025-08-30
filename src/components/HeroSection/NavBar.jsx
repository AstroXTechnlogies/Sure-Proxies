import React, { useState } from "react";
import {
  Box,
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  Grid,
  IconButton,
  Link as MUILink,
  Button,
  Typography,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import SureProxiesLogo from "../../../assets/logo/sure-proxies-logo.svg?react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <>
      <TemporaryDrawer open={open} toggleDrawer={toggleDrawer} />
      <Grid container>
        <Grid container alignItems={"center"} spacing={0.5} flexGrow={1}>
          <SureProxiesLogo style={{ width: 48, height: 46 }} />
          <Typography variant="h5" color="text.secondary" fontWeight={900}>
            Sure Proxies
          </Typography>
        </Grid>
        <Grid container spacing={3} alignItems={"center"}>
          <Button
            to={"/login"}
            component={Link}
            variant="text"
            sx={{
              color: "text.secondary",
            }}
          >
            LOGIN
          </Button>

          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ color: "text.secondary" }} />
          </IconButton>
        </Grid>
      </Grid>
    </>
  );
};

export default NavBar;

const TemporaryDrawer = ({ open, toggleDrawer }) => {
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          { name: "Home", id: "#home" },
          { name: "Why Choose Us", id: "#why-choose-us" },
          { name: "Info", id: "#info" },
          { name: "Product Offering", id: "#product" },
          { name: "Learn How To Use Proxy", id: "#" },
          { name: "Order A Proxy", id: "#" },
        ].map((text, index) => (
          <Box key={index}>
            <ListItem sx={{ width: "100%" }} key={text} disablePadding>
              <MUILink
                underline="none"
                width={"100%"}
                height={"100%"}
                color="text.primary"
                href={text.id}
              >
                <ListItemButton>
                  <ListItemText primary={text.name} />
                </ListItemButton>
              </MUILink>
            </ListItem>
            <Box sx={{ width: "100%", py: 1 }}>
              <Divider />
            </Box>
          </Box>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
};
