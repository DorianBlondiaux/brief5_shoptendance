import logo from './logo.svg';
import './App.css';
import Product from './Product';
import AddProduct from './AddProduct';
import { useState, useEffect } from "react";
import axios from 'axios';

function App() {

  const [isLoading, setLoading] = useState(true);
  const [myProducts, setMyProducts] = useState();

  const apiUrl = 'http://localhost:3000/products/';

  useEffect(() => {
    axios.get(apiUrl).then(response => {
      setMyProducts(response.data);
      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <AddProduct productsNumber={myProducts.length}></AddProduct>
      {myProducts.map((product, i) => (
        <Product key={i} title={product.title} description={product.description}
          categories={product.categories.toString()} basePrice={product.basePrice}
          salePrice={product.salePrice} imageUrl={product.imageUrl}>
        </Product>
      ))}
    </div>
  );
}

export default App;
