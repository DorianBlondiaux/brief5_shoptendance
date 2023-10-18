import logo from './logo.svg';
import './App.css';
import Product from './Product';
import AddProduct from './AddProduct';
import { useEffect, useState } from "react";
import {useSelector } from "react-redux";
import axios from 'axios';
import { isEmpty } from "./Utils";


function App() {

  const products = useSelector((state) => state.productReducer);
 
  return (
    <div>
      <AddProduct productsNumber={products.length}></AddProduct>
      {!isEmpty(products) && products.map((product, i) => (
        <Product key={i} title={product.title} description={product.description}
          categories={product.categories.toString()} basePrice={product.basePrice}
          salePrice={product.salePrice} imageUrl={product.imageUrl}>
        </Product>
      ))}
    </div>
  );
}

export default App;
