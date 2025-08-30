import React, { useEffect, useRef, useState } from "react";
import { Box, Button, Grid, Link, Typography } from "@mui/material";
import SectionPadding from "../subComponents/SectionPadding";

import LanguageIcon from "@mui/icons-material/Language";

import heroImg from "../../../assets/imgs/hero-bg.png";
import GlassCard from "../subComponents/GlassCard";

const HeroBody = () => {
  return (
    <SectionPadding pt={"20%"} px={0}>
      <Grid container>
        <Grid
          container
          direction={"column"}
          sx={{
            "& > *": {
              color: "text.secondary",
            },
          }}
          spacing={4}
        >
          <Grid container spacing={5}>
            <Typography variant="h1" maxWidth={360} data-aos="fade-up">
              Secure, Fast & Reliable Proxies
            </Typography>
            <Typography
              variant="body2"
              maxWidth={360}
              data-aos="fade-up"
              data-aos-delay={400}
            >
              Stay anonymous, access global content, and browse with confidence
              — powered by enterprise-grade proxy networks.
            </Typography>
          </Grid>
          <Grid
            container
            spacing={3}
            sx={{
              "& > button": {
                color: "text.secondary",
              },
            }}
            data-aos="fade-up"
            data-aos-delay={800}
          >
            <Button variant="contained">Get Proxies Now</Button>
            <Button variant="outlined">How It Works</Button>
          </Grid>
        </Grid>

        {/* <IPvConnectionOverlay /> */}
        <Grid>
          <img
            src={heroImg}
            style={{
              width: "100vw",
              position: "absolute",
              left: 0,
              right: 0,
              bottom: 0,
              height: "35vh",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        </Grid>
      </Grid>
    </SectionPadding>
  );
};

export default HeroBody;

const IPvConnectionOverlay = () => (
  <Grid
    container
    justifyContent={"space-around"}
    sx={{ width: "100%", mt: "10vh" }}
  >
    <Grid
      component={GlassCard}
      container
      spacing={0.5}
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
      <LanguageIcon fontSize="medium" />
      <Typography variant="h4"> IPv6</Typography>
    </Grid>
    <Grid
      component={GlassCard}
      container
      spacing={0.5}
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
      <LanguageIcon fontSize="medium" />
      <Typography variant="h4"> IPv4</Typography>
    </Grid>
  </Grid>
);
