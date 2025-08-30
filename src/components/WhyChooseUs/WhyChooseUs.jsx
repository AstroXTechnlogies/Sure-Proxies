import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@mui/material";
import SectionPadding from "../subComponents/SectionPadding";
import BenefitCard from "./BenefitCard";

import AOS from "aos";

import GearIcon from "../../../assets/icons/gear.svg?react";
import LowPriceIcon from "../../../assets/icons/low-price.svg?react";
import ShieldIcon from "../../../assets/icons/shield.svg?react";

const WhyChooseUs = () => {
  return (
    <Grid
      id="why-choose-us"
      container
      spacing={4}
      component={SectionPadding}
      width={"100%"}
    >
      <Grid container direction={"column"} spacing={1} width={"100%"}>
        <Typography variant="h5">Why Choose Us</Typography>
        <Grid
          container
          direction={"column"}
          spacing={3}
          sx={{
            "& > *": {
              maxWidth: 360,
            },
          }}
        >
          <Typography variant="h2" data-aos-delay={400}>
            The Smarter Way to Browse Without Limits
          </Typography>
          <Typography
            variant="h5"
            sx={{ color: "#4B445E" }}
            data-aos-delay={800}
          >
            Reliable, secure, and borderless access to the web — designed to
            give you speed, privacy, and freedom every time you connect.
          </Typography>
        </Grid>
      </Grid>
      <Grid container width={"100%"} spacing={4} justifyContent={"center"}>
        <BenefitCard
          heading={"Affordable Prices"}
          caption={
            "Get premium proxy services without breaking the bank — flexible plans designed to fit every need."
          }
          Icon={LowPriceIcon}
        />
        <BenefitCard
          heading={"Security & Anonymity"}
          caption={
            "Browse safely with advanced encryption and total privacy — your identity stays protected, always"
          }
          Icon={ShieldIcon}
        />
        <BenefitCard
          heading={"Easy Management & Setup"}
          caption={
            "Intuitive tools and a simple dashboard make setup effortless — manage everything in just a few clicks."
          }
          Icon={GearIcon}
        />
      </Grid>
    </Grid>
  );
};

export default WhyChooseUs;
