import React from "react";
import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";

import SectionPadding from "../subComponents/SectionPadding";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SureProxiesLogo from "../../../assets/logo/sure proxies round.svg?react";
import ProductCard from "../ProductOffering/ProductCard";
import productData from "../ProductOffering/ProductData";

const AccountProfile = () => {
  return (
    <Box>
      <Grid container width={"100%"}>
        <AccountAppBar />
      </Grid>
      <Box component={SectionPadding} pt={3}>
        <AccountBody />
        <OrderProxies />
      </Box>
    </Box>
  );
};

export default AccountProfile;

const AccountAppBar = () => (
  <AppBar position="static" sx={{ bgcolor: "primary.bgColor" }}>
    <Toolbar>
      <IconButton size="large" edge="start" color="inherit" aria-label="menu">
        <SureProxiesLogo style={{ width: 42, height: 42 }} />
      </IconButton>
      <Typography
        variant="h4"
        component="div"
        color="text.primary"
        sx={{ flexGrow: 1 }}
      >
        Sure Proxies
      </Typography>
      <IconButton color="inherit">
        <AccountCircleIcon sx={{ fontSize: 42 }} />
      </IconButton>
    </Toolbar>
  </AppBar>
);

const AccountBody = () => (
  <Box>
    <Grid container spacing={6}>
      <Grid container direction={"column"} spacing={2}>
        <Typography variant="h2">Hey! 👋</Typography>
        <Typography variant="body2" color="text.greyed">
          Here's what's going on in your account...
        </Typography>
      </Grid>
      <Grid container width={"100%"} justifyContent={"center"}>
        <Box
          sx={{
            p: 4,
            pt: 8,
            background:
              "conic-gradient(from 0deg at 50% 18.05%, #1C172E 0deg, #3A2F67 176.54deg, #6C4BC5 360deg)",
            boxShadow: 24,
            borderRadius: 2,
            color: "text.secondary",
          }}
        >
          <Grid
            container
            spacing={3}
            sx={{
              "& > *": {
                width: "100%",
              },
            }}
          >
            <Grid container alignItems={"center"}>
              <Grid flexGrow={1}>
                <Typography variant="body2">Active Proxies</Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    bgcolor: "primary.bgColor",
                    px: 1,
                    py: 0.7,
                    borderRadius: 4,
                    color: "text.primary",
                  }}
                >
                  0
                </Typography>
              </Grid>
            </Grid>
            <Grid container alignItems={"center"}>
              <Grid flexGrow={1}>
                <Typography variant="body2">Expiring Soon</Typography>
              </Grid>
              <Grid>
                <Typography
                  sx={{
                    bgcolor: "primary.bgColor",
                    px: 1,
                    py: 0.7,
                    borderRadius: 4,
                    color: "text.primary",
                  }}
                >
                  0
                </Typography>
              </Grid>
            </Grid>
            <Grid container pt={2}>
              <Button variant="contained" fullWidth sx={{ color: "inherit" }}>
                Get A Proxy Now
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  </Box>
);

const OrderProxies = () => (
  <Box my={8}>
    <Box sx={{ width: "100%" }}>
      <Typography variant="h5">Available Proxies</Typography>
    </Box>
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        overflowX: "scroll",

        py: 2,
      }}
    >
      <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
        {productData.map(({ Icon, heading, caption, pricing }, i) => (
          <Grid key={i} sx={{ minWidth: "max-content" }}>
            <ProductCard
              Icon={Icon}
              heading={heading}
              caption={caption}
              pricing={pricing}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);
