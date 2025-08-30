import { useState, useEffect } from "react";
import {
  Box,
  CssBaseline,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import TelegramIcon from "../assets/icons/telegram2.svg?react";

// import "./firebase/firebaseConfig";

import "./App.css";
import Hero from "./components/HeroSection/Hero";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Info from "./components/Info/Info";
import ProductOffering from "./components/ProductOffering/ProductOffering";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import AccountProfile from "./components/AccountProfile/AccountProfile";

// Create a custom theme

let theme = createTheme({
  palette: {
    text: {
      primary: "#08070e",
      secondary: "#fff",
      greyed: "#3c3c3c",
    },
    primary: {
      main: "#1C172E",
      light: "#3A305F",
      dark: "#08070E",
      bgColor: "#DBD6EA",
      bgColor2: "#C4BCDC",
      contrastText: "#333",
    },

    adornment: {
      main: "#3A305F",
    },
    background: {
      default: "#DBD6EA",
      paper: "#C4BCDC",
    },
  },
  typography: {
    fontFamily: '"Poppins", sans-serif;',
    fontOpticalSizing: "auto",
    h1: {
      fontFamily: '"Dela Gothic One", sans-serif',
      fontSize: "2rem",
      lineHeight: 1.25,
      letterSpacing: -0.5,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: -0.5,
    },

    h3: {
      fontSize: "1.25rem",
      fontWeight: 600,
      letterSpacing: -0.5,
    },
    h4: {
      fontSize: "1.125rem",
      fontWeight: 600,
      letterSpacing: -0.5,
    },
    h5: {
      fontSize: "1rem",
      fontWeight: 700,
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 12,
        },
        elevation25: {
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
        },
      },
    },
  },
});

theme = createTheme({
  ...theme,
  shadows: [...theme.shadows, "0 8px 24px rgba(0,0,0,0.2)"],
  components: {
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: "transparent",
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          color: "#3c3c3c",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        custom: {
          border: "1px solid rgba(255, 255, 255, 0.1)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
          padding: theme.spacing(1, 2.5),
          fontWeight: 500,
          textTransform: "capitalize",
          color: theme.palette.primary.light,
        },
        text: {
          fontWeight: 600,
        },
        contained: {
          fontWeight: 500,
          padding: "8px 16px",
          textTransform: "capitalize",
        },
        outlined: {
          fontWeight: 500,
          padding: "8px 16px",
          textTransform: "capitalize",
          border: "1px solid #3a305fe1",
        },
      },
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Hero />
        <WhyChooseUs />
        <Info />
        <ProductOffering />
        <GetStarted />
        <Footer />
      </>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/account", element: <AccountProfile /> },
]);
const App = () => {
  useEffect(() => {
    AOS.init({
      // Global settings for AOS
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true, // whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <Box
      sx={{
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      <ThemeProvider theme={theme} noSsr>
        <CssBaseline />
        <RouterProvider router={router} />
        {/* <Box
          sx={{
            position: "fixed",
            bottom: "20vh",
            right: 0,
          }}
        >
          <IconButton color="primary" size="small" sx={{ boxShadow: 24 }}>
            <TelegramIcon
              style={{
                width: 60,
                height: 60,
              }}
            />
          </IconButton>
        </Box> */}
      </ThemeProvider>
    </Box>
  );
};

export default App;
