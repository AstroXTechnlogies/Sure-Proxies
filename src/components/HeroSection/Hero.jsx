import React, { useRef } from "react";
import { Box, Grid, Typography, useColorScheme } from "@mui/material";
import NavBar from "./NavBar";
import HeroBody from "./HeroBody";
import GlassCard from "../subComponents/GlassCard";
import SectionPadding from "../subComponents/SectionPadding";

const Hero = () => {
  return (
    <Box
      id="home"
      component={SectionPadding}
      sx={{
        pt: 2,
        position: "relative",
        width: "100%",
        maxWidth: "100%",
        height: "100vh",
        overflow: "hidden",
        background:
          " linear-gradient(185.76deg, #110E1B 0%, #0A0810 41.19%, #030305 95.42%)",
      }}
    >
      <NavBar />
      <HeroBody />
    </Box>
  );
};

export default Hero;
