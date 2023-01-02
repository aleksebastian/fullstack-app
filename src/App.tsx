import { useState, useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { Product } from "./product";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CircularIndeterminate from "./components/Loading";

function App() {
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=25")
      .then((res) => res.json())
      .then((data) => {
        console.log("products: ", products);
        setProducts(data);
        setIsLoading(false);
      });
  }, []);

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="App">
      <Nav />
      <div className="content">
        {isLoading ? (
          <CircularIndeterminate />
        ) : (
          <div className="products-grid">
            {products.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
