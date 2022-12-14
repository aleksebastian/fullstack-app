import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./ProductCard.css";

export default function ImgMediaCard({ product }) {
  return (
    <Card>
      <div className="product-image-wrapper">
        <CardMedia
          component="img"
          alt="product image"
          image={product.image}
          className="product-image"
        />
      </div>
      <CardContent>
        <Typography gutterBottom component="div">
          {product.title}
        </Typography>
        <Typography variant="h6">${product.price}</Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
