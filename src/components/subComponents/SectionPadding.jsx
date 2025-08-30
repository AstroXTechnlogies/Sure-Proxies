import { Box } from "@mui/material";
import React from "react";

const SectionPadding = ({ children, px = 3, pt = 6, style, ...props }) => {
  return (
    <Box sx={{ px, pt, ...style }} {...props}>
      {children}
    </Box>
  );
};

export default SectionPadding;
