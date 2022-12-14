import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./product";
import "./App.css";
import Nav from "./components/Nav";

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
      <Nav />
      <div className="content">
        <div className="products-grid">
          {products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
