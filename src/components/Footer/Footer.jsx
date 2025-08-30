import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
} from "@mui/material";

import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "../../../assets/icons/telegram.svg?react";
import SubmitResultSnackbar from "../subComponents/SubmitResultSnackBar";
import useFirestore from "../../hooks/useFirestore";

const Footer = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [email, setEmail] = useState("");
  const { addEmail, isLoading } = useFirestore();

  const handleChange = (ev) => {
    setEmail(ev.target.value);
  };
  const handleSubmitEmail = () => {
    addEmail({ newsletterEmail: email }).then(() => setOpenSnackbar(true));
  };
  return (
    <Grid container spacing={3} sx={{ pt: 10, px: 3, width: "100%" }}>
      <Grid size={12} sx={{ pb: 0 }}>
        <Divider />
      </Grid>
      {/* Sections & Info */}
      <Grid container size={12} spacing={2}>
        <Grid size={12}>
          <Typography variant="body1" fontWeight={600}>
            Sections/ Important Links
          </Typography>
        </Grid>
        <Grid direction={"column"} spacing={1} container size={6}>
          <Grid>
            <Link color="text.primary" href="#home" underline="hover">
              <Typography variant="body2">Home</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#why-choose-us" underline="hover">
              <Typography variant="body2">Why Choose Us</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#info" underline="hover">
              <Typography variant="body2">Info</Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid container direction={"column"} spacing={1} size={6}>
          <Grid>
            <Link color="text.primary" href="#product" underline="hover">
              <Typography variant="body2">Product Offering</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#" underline="hover">
              <Typography variant="body2">Learn How To Use Proxy</Typography>
            </Link>
          </Grid>
          <Grid>
            <Link color="text.primary" href="#" underline="hover">
              <Typography variant="body2">Order A Proxy</Typography>
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Newsletter Section */}
      <Grid size={12} container spacing={1}>
        <Grid size={12}>
          <Typography variant="body1" fontWeight={600}>
            Subscribe to our Newsletter!
          </Typography>
        </Grid>
        <Grid size={12} container spacing={3}>
          <TextField
            id="email"
            variant="standard"
            helperText={<span style={{ color: "#333" }}>Enter your Email</span>}
            sx={{ flex: 1, maxWidth: 300 }}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <MailOutlinedIcon color="adornment" />
                  </InputAdornment>
                ),
              },
            }}
            onChange={handleChange}
          />
          <Grid>
            <Button
              variant="outlined"
              loading={isLoading}
              loadingPosition="start"
              onClick={handleSubmitEmail}
            >
              Subscribe
            </Button>
          </Grid>
        </Grid>

        <SubmitResultSnackbar
          open={openSnackbar}
          setOpen={setOpenSnackbar}
          submitResult={{
            info: "Thanks for Subscribing to our Newsletter!",
            result: "success",
          }}
        />
      </Grid>

      {/* Social Media links */}
      <Grid container rowSpacing={1}>
        <Grid size={12}>
          <Typography variant="body2">Follow Us on:</Typography>
        </Grid>
        <Link
          color="text.primary"
          underline="none"
          href="https://www.facebook.com/share/"
          target="_blank"
        >
          <FacebookIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://www.instagram.com/sureproxies"
          target="_blank"
        >
          <InstagramIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://wa.me/"
          target="_blank"
        >
          <WhatsAppIcon />
        </Link>
        <Link
          color="text.primary"
          underline="none"
          href="https://"
          target="_blank"
        >
          <TelegramIcon style={{ width: 24, height: 24 }} />
        </Link>
      </Grid>

      {/* Copyright */}
      <Grid container size={12} justifyContent={"center"} sx={{ pb: 1 }}>
        <Link href="https://sureproxies.com" target="_self">
          <Typography variant="body2">
            @ Sure Proxies {new Date().getFullYear()}
          </Typography>
        </Link>
      </Grid>
    </Grid>
  );
};

export default Footer;
