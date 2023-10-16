import logo from './logo.svg';
import './App.css';
import Product from './Product';
import AddProduct from './AddProduct';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProduct, addProduct, fetchProducts } from "./reducer";
import axios from 'axios';


function App() {

  //const [isLoading, setLoading] = useState(true);
  const [myProducts, setMyProducts] = useState();
  //const apiUrl = 'http://localhost:3000/products/';

  const dispatch = useDispatch();
  const { product, products, loading, error } = useSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchProduct());
    dispatch(fetchProducts());
    console.log(products);
  }, [])

  if (loading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div>
      <AddProduct productsNumber={products.length}></AddProduct>
      {products?.map((product, i) => (
        <Product key={i} title={product.title} description={product.description}
          categories={product.categories.toString()} basePrice={product.basePrice}
          salePrice={product.salePrice} imageUrl={product.imageUrl}>
        </Product>
      ))}
    </div>
  );


  // useEffect(() => {
  //   axios.get(apiUrl).then(response => {
  //     setMyProducts(response.data);
  //     setLoading(false);
  //   });
  // }, []);

  // if (isLoading) {
  //   return <div className="App">Loading...</div>;
  // }

  // return (
  //   <div>
  //     <AddProduct productsNumber={myProducts.length}></AddProduct>
  //     {myProducts.map((product, i) => (
  //       <Product key={i} title={product.title} description={product.description}
  //         categories={product.categories.toString()} basePrice={product.basePrice}
  //         salePrice={product.salePrice} imageUrl={product.imageUrl}>
  //       </Product>
  //     ))}
  //   </div>
  // );
}

export default App;
