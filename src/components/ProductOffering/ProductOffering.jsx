import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import SectionPadding from "../subComponents/SectionPadding";
import ProductCard from "./ProductCard";
import productData from "./ProductData";

const ProductOffering = () => {
  return (
    <Box id="product" component={SectionPadding} pt={10} sx={{ width: "100%" }}>
      <Grid container spacing={4}>
        <Grid container spacing={1}>
          <Grid container width={"100%"}>
            <Typography variant="h5">Product offering</Typography>
          </Grid>
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
            <Typography variant="h2">
              Choose the Perfect Proxy Plan for You
            </Typography>
            <Typography variant="h5" sx={{ color: "#4B445E" }}>
              Flexible, reliable, and built to scale — whether you’re an
              individual or a business, we’ve got the right solution to keep you
              connected securely.
            </Typography>
          </Grid>
        </Grid>

        {/* Product Offering Options */}

        <Grid container width={"100%"} justifyContent={"center"}>
          {productData.map(({ Icon, heading, caption, pricing }, i) => (
            <Grid container key={i}>
              <ProductCard
                Icon={Icon}
                heading={heading}
                caption={caption}
                pricing={pricing}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductOffering;
