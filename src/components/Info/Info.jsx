import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import SectionPadding from "../subComponents/SectionPadding";

import LanguageIcon from "@mui/icons-material/Language";

import infoBg from "../../../assets/imgs/info-bg2.png";
import infoBgVid from "../../../assets/vids/info-bg2.mp4";
import GlassCard from "../subComponents/GlassCard";

const Info = () => {
  return (
    <Box
      id="info"
      component={SectionPadding}
      pt={8}
      mt={8}
      sx={{
        background: "#08070E",
        height: 550,
        width: "100%",
        position: "relative",
      }}
    >
      <Grid
        container
        spacing={4}
        justifyContent={"center"}
        sx={{
          "& > *": {
            color: "text.secondary",
            textAlign: "center",
            maxWidth: 400,
            zIndex: 100,
          },
        }}
      >
        <Typography variant="h2">
          Your Gateway to the Web Without Borders
        </Typography>
        <Typography variant="body2">
          Unlock websites, protect your privacy, and enjoy unrestricted access
          worldwide with Sure Proxies.
        </Typography>
        <Grid
          spacing={0}
          container
          justifyContent={"space-around"}
          sx={{
            width: "100%",
            "& > button": {
              color: "text.secondary",
            },
          }}
        >
          <Button variant="contained">Order Proxies</Button>
          <Button variant="outlined">learn How It Works</Button>
        </Grid>
      </Grid>
      <Box>
        <IPvConnectionOverlay />
        <div
          style={{
            background:
              "linear-gradient(180deg, #08070E 0%, #1B0E2D 34.86%, rgba(27, 14, 45, 0.29) 99.27%)",
            width: "100%",
            height: 330,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 10,
            zIndex: 1,
          }}
        />
        {/* <img
          src={infoBg}
          style={{
            width: "100vw",
            height: 230,
            objectFit: "cover",
            objectPosition: "top",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 0,
          }}
        /> */}
        <video
          src={infoBgVid}
          autoPlay
          loop
          muted
          style={{
            width: "120vw",
            height: 230,
            objectFit: "cover",
            objectPosition: "top",
            position: "absolute",
            bottom: 0,
            left: "-20vw",
            right: 0,
            zIndex: 0,
          }}
        />
      </Box>
    </Box>
  );
};

export default Info;

const IPvConnectionOverlay = () => (
  <Grid
    container
    justifyContent={"space-around"}
    sx={{
      width: "100%",
      mt: "3vh",
      position: "relative",
      top: 50,
      zIndex: 100,
    }}
  >
    <Grid
      component={GlassCard}
      container
      spacing={1}
      alignItems={"center"}
      sx={{
        px: 2,
        py: 1.5,
        borderRadius: 1,
        transform: "rotate(-20deg)",
        "& > *": {
          color: "text.secondary",
        },
      }}
    >
      <LanguageIcon fontSize="large" />
      <Typography variant="h4">IPv6</Typography>
    </Grid>
    <Grid
      component={GlassCard}
      container
      spacing={1}
      alignItems={"center"}
      sx={{
        px: 2,
        py: 1.5,
        borderRadius: 1,
        transform: "rotate(20deg)",
        "& > *": {
          color: "text.secondary",
        },
      }}
    >
      <LanguageIcon fontSize="large" />
      <Typography variant="h3">IPv4</Typography>
    </Grid>
  </Grid>
);
