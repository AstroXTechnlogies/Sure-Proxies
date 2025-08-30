import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SectionPadding from "../subComponents/SectionPadding";

import LockPersonIcon from "@mui/icons-material/LockPerson";
import MailRoundedIcon from "@mui/icons-material/MailRounded";
import GoogleIcon from "../../..//assets/icons/google.svg?react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Login = () => {
  const [userData, setUserData] = useState({
    email: "",
    psw: "",
  });

  const { isLoading, authSignInWithEmail, authSignInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const signInUserWithGoogle = async () => {
    const isSuccessful = await authSignInWithGoogle();

    if (isSuccessful) {
      navigate("/account");
    } else {
      console.error("Something Went Wrong!");
    }
  };

  return (
    <Box component={SectionPadding} pt={8} height={"100vh"}>
      <Box sx={{ width: "100%", height: "100%", position: "relative" }}>
        <Grid container justifyContent={"center"}>
          <Typography variant="h5">Sign in to your account</Typography>
        </Grid>
        <Grid container pt={6} spacing={5} direction={"column"}>
          <LoginForm
            userData={userData}
            setUserData={setUserData}
            isLoading={isLoading}
            authSignInWithEmail={authSignInWithEmail}
            navigate={navigate}
          />
          <Grid container>
            <Divider sx={{ px: 1, color: "#3C3C3C", width: "100%" }}>
              <Typography variant="h5" px={2}>
                OR
              </Typography>
            </Divider>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Button variant="outlined" fullWidth onClick={signInUserWithGoogle}>
              <GoogleIcon style={{ width: 30, height: 30, paddingRight: 8 }} />
              <Typography
                variant="caption"
                fontWeight={700}
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                Sign In With Google
              </Typography>
            </Button>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography
              variant="caption"
              fontWeight={700}
              sx={{ color: "#3C3C3C" }}
            >
              New to Sure Proxies?
              <Button
                to={"/signup"}
                component={Link}
                sx={{ color: "text.primary", textTransform: "capitalize" }}
              >
                 Create Account
              </Button>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent={"center"}
          sx={{ position: "absolute", bottom: 0, width: "100%" }}
        >
          <Typography variant="body2">@ Astro X Technologies 2025</Typography>
        </Grid>
      </Box>
    </Box>
  );
};

export default Login;

const LoginForm = ({
  userData,
  setUserData,
  isLoading,
  authSignInWithEmail,
  navigate,
}) => {
  const handleDataChange = (el, ev) => {
    setUserData((prev) => ({ ...prev, [el]: ev.target.value }));
  };

  const signInUser = async () => {
    const isSuccessful = await authSignInWithEmail({
      email: userData.email,
      psw: userData.psw,
    });

    if (isSuccessful) {
      navigate("/account");
    } else {
      console.error("Something Went Wrong!");
    }
  };

  return (
    <Grid
      container
      spacing={5}
      direction={"column"}
      sx={{
        width: "100%",
        "& > *": {
          width: "100%",
          color: "text.primary",
        },
      }}
    >
      <Grid>
        <TextField
          name="email"
          value={userData.email}
          onChange={(ev) => handleDataChange("email", ev)}
          helperText="Enter your Email"
          variant="filled"
          label="Email"
          type="email"
          placeholder="Email"
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <MailRoundedIcon color="adornment" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid>
        <TextField
          name="Password"
          // error={}
          value={userData.psw}
          onChange={(ev) => handleDataChange("psw", ev)}
          helperText="Enter your Password"
          variant="filled"
          label="Password"
          type="password"
          placeholder="Password"
          sx={{ width: "100%" }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LockPersonIcon color="adornment" />
                </InputAdornment>
              ),
            },
          }}
        />
      </Grid>
      <Grid>
        <Button
          variant="contained"
          fullWidth
          onClick={signInUser}
          loading={isLoading}
          loadingPosition="start"
          sx={{ py: 2, color: "text.secondary" }}
        >
          Sign In
        </Button>
      </Grid>
    </Grid>
  );
};
