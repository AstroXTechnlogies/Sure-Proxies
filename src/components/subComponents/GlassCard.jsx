import React from "react";
import { Box, Paper } from "@mui/material";

const GlassCard = ({ children, style, ...props }) => {
  return (
    //    📦 Glass Cards

    <Paper
      elevation={25}
      sx={{
        border: "1px solid rgba(255, 255, 255, 0.2)",
        background: " rgba(58, 48, 95, 0.3)",
        backdropFilter: "blur(5px)",
        borderTop: "1px solid rgba(255, 255, 255, 0.9)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.5)",
        ...style,
      }}
      {...props}
    >
      {children}
    </Paper>
  );
};

export default GlassCard;
