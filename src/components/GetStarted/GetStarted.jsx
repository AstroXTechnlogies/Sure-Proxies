import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import SectionPadding from "../subComponents/SectionPadding";

import infoBg from "../../../assets/imgs/info-bg.png";

const GetStarted = () => {
  return (
    <Box
      component={SectionPadding}
      mt={10}
      pb={8}
      sx={{ bgcolor: "primary.dark", position: "relative", zIndex: 1 }}
    >
      <Grid
        container
        direction={"column"}
        width={"100%"}
        spacing={4}
        alignItems={"center"}
        sx={{
          "& > *": {
            maxWidth: 400,
          },
        }}
      >
        <Grid>
          <Typography variant="h2" textAlign={"center"} color="text.secondary">
            Ready to Experience Seamless Browsing?
          </Typography>
        </Grid>
        <Grid>
          <Typography
            variant="body2"
            textAlign={"center"}
            sx={{ color: "#BAB8B8" }}
          >
            Unlock speed, privacy, and freedom — start today with{" "}
            <Typography
              component={"span"}
              sx={{
                color: "text.secondary",
                textTransform: "uppercase",
                fontWeight: 700,
              }}
            >
              Sure Proxies
            </Typography>
          </Typography>
        </Grid>
        <Grid
          container
          direction={"column"}
          spacing={3}
          width={"100%"}
          alignItems={"center"}
          sx={{
            "& > button": {
              color: "text.secondary",
            },
          }}
        >
          <Button variant="contained">Get Started Now</Button>
          <Button variant="outlined">Learn How To Use Proxy</Button>
        </Grid>
      </Grid>
      <img
        src={infoBg}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.5,
        }}
      />
    </Box>
  );
};

export default GetStarted;
