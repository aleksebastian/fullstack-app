import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function BasicCard({ product }) {
  return (
    <Card sx={{ minWidth: 275, height: 400 }}>
      <CardContent className="product-card-content">
        <div className="product-image-wrapper">
          <img
            className="product-image"
            src={product.image}
            alt="product cover image"
          />
        </div>

        <div className="card-title">
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {product.title}
          </Typography>
        </div>
      </CardContent>

      <CardActions>
        <Button size="small">Product Details</Button>
      </CardActions>
    </Card>
  );
}
