import { Grid, Typography } from "@mui/material";

import ResidentialIcon from "../../../assets/icons/residential.svg?react";
import DatabaseIcon from "../../../assets/icons/database.svg?react";
import PhoneIcon from "../../../assets/icons/phone.svg?react";

const productData = [
  {
    Icon: ResidentialIcon,
    heading: "Static Residential",
    caption:
      "Stay safe and anonymous online with real Static Residential IP addresses for long-term use, enjoy stability and reliability.",
    pricing: (
      <>
        <Typography variant="h5">
          N5,500/
          <span style={{ color: "#3C3C3C", fontWeight: 600 }}>month</span>
        </Typography>
      </>
    ),
  },
  {
    Icon: DatabaseIcon,
    heading: (
      <Grid container width={"100%"}>
        <Grid flexGrow={1}>
          <Typography variant="h4">Datacenter</Typography>
        </Grid>
        <Grid>
          <Typography
            variant="caption"
            sx={{
              bgcolor: "background.default",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              boxShadow: 4,
            }}
          >
            IPv4
          </Typography>
        </Grid>
      </Grid>
    ),
    caption:
      "Choose Datacenter IPv4 addresses. Access high performance and versatility for your online endeavors.",
    pricing: (
      <>
        <Typography variant="h5">
          N5,200/
          <span style={{ color: "#3C3C3C", fontWeight: 600 }}>month</span>
        </Typography>
      </>
    ),
  },
  {
    Icon: DatabaseIcon,
    heading: (
      <Grid container width={"100%"}>
        <Grid flexGrow={1}>
          <Typography variant="h4">Datacenter</Typography>
        </Grid>
        <Grid>
          <Typography
            variant="caption"
            sx={{
              bgcolor: "background.default",
              px: 1,
              py: 0.5,
              borderRadius: 1,
              boxShadow: 4,
            }}
          >
            IPv6
          </Typography>
        </Grid>
      </Grid>
    ),
    caption:
      "Leverage Datacenter IPv6 addresses to tap into high-speed connections and data centers at an affordable price.",
    pricing: (
      <>
        <Typography variant="h5">
          N1,500/
          <span style={{ color: "#3C3C3C", fontWeight: 600 }}>month</span>
        </Typography>
      </>
    ),
  },
  {
    Icon: PhoneIcon,
    heading: "Static Mobile",
    caption:
      "Get Static Mobile Proxies from 47+ locations, support for 3G/4G/5G networks, shared and dedicated IPs. ",
    pricing: (
      <>
        <Typography variant="h5">
          N25,000/
          <span style={{ color: "#3C3C3C", fontWeight: 600 }}>month</span>
        </Typography>
      </>
    ),
  },
  {
    Icon: PhoneIcon,
    heading: "Rotating Mobile",
    caption:
      "Use Rotating Mobile proxies to reach content globally. Leverage our pool of proxies that connect through real 3G/4G/5G mobile networks.",
    pricing: (
      <>
        <Typography variant="h5">
          N12,500/ <span style={{ color: "#3C3C3C", fontWeight: 600 }}>GB</span>
        </Typography>
      </>
    ),
  },
];

export default productData;
