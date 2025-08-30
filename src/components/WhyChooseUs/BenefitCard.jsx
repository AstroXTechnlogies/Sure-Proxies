import React from "react";
import { Box, Grid, Paper, Typography } from "@mui/material";

const BenefitCard = ({ heading, caption, Icon }) => {
  return (
    <Paper
      component={Grid}
      container
      spacing={1.5}
      direction={"column"}
      alignItems={"center"}
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 400,
        px: 3,
        py: 3,
        borderRadius: 2,
      }}
    >
      <Icon style={{ width: 96, height: 96 }} />
      <Grid container direction={"column"} alignItems={"center"} spacing={2}>
        <Typography variant="h3">{heading}</Typography>
        <Typography variant="body2" color="#3c3c3c">
          {caption}
        </Typography>
      </Grid>
    </Paper>
  );
};

export default BenefitCard;
