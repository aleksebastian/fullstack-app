import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Button from "@mui/material/Button";
import ProductCard from "./components/ProductCard";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((data) => {
        console.log("products: ", products);
        setProducts(data);
      });
  }, []);

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);

  return (
    <div className="App">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

export default App;
