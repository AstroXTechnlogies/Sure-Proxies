import React from "react";
import { Box, Button, Grid, Paper, Typography } from "@mui/material";

import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";

const ProductCard = ({ heading, caption, Icon, pricing }) => {
  return (
    <Paper
      component={Grid}
      container
      spacing={3}
      direction={"column"}
      elevation={0}
      sx={{
        width: "100%",
        maxWidth: 360,
        px: 3,
        py: 4,
        borderRadius: 2,
      }}
    >
      <Icon style={{ width: 40, height: 40 }} />
      <Grid container direction={"column"} spacing={1} width={"100%"}>
        <Typography variant="h4">{heading}</Typography>
        <Typography variant="caption" color="#3c3c3c">
          {caption}
        </Typography>
      </Grid>
      <Grid container alignItems={"center"} spacing={0}>
        <Grid container direction={"column"} spacing={0.5} flexGrow={1}>
          <Grid>
            <Typography variant="caption" color="#3c3c3c">
              Starts From
            </Typography>
          </Grid>
          <Grid>{pricing}</Grid>
        </Grid>
        <Grid>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIosRoundedIcon />}
            sx={{ color: "text.secondary" }}
          >
            Order Now
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ProductCard;
