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

const SignUp = () => {
  const [userData, setUserData] = useState({
    email: "",
    psw: "",
  });

  const { isLoading, authWithEmail, authWithGoogle } = useAuth();
  const navigate = useNavigate();

  const signUpUserWithGoogle = async () => {
    const isSuccessful = await authWithGoogle();

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
          <Typography variant="h5">Create your Sure Proxies account</Typography>
        </Grid>
        <Grid container pt={6} spacing={5} direction={"column"}>
          <SignUpForm
            userData={userData}
            setUserData={setUserData}
            isLoading={isLoading}
            authWithEmail={authWithEmail}
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
            <Button variant="outlined" fullWidth onClick={signUpUserWithGoogle}>
              <GoogleIcon style={{ width: 30, height: 30, paddingRight: 8 }} />
              <Typography
                variant="caption"
                fontWeight={700}
                textTransform={"uppercase"}
                textAlign={"center"}
              >
                Sign Up With Google
              </Typography>
            </Button>
          </Grid>
          <Grid container justifyContent={"center"}>
            <Typography
              variant="caption"
              fontWeight={700}
              sx={{ color: "#3C3C3C" }}
            >
              Already Have An Account?
              <Button
                to={"/login"}
                component={Link}
                sx={{ color: "text.primary", textTransform: "uppercase" }}
              >
                 SIGN IN
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

export default SignUp;

const SignUpForm = ({
  userData,
  setUserData,
  isLoading,
  authWithEmail,
  navigate,
}) => {
  const handleDataChange = (el, ev) => {
    setUserData((prev) => ({ ...prev, [el]: ev.target.value }));
  };

  const signUpUser = async () => {
    const isSuccessful = await authWithEmail({
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
          // error={}
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
          onClick={signUpUser}
          loading={isLoading}
          loadingPosition="start"
          sx={{ py: 2, color: "text.secondary" }}
        >
          Sign Up
        </Button>
      </Grid>
    </Grid>
  );
};
