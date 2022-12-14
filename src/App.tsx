import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./product";
import "./App.css";

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
  const [products, setProducts] = useState<Product[]>([]);

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
