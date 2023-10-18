import './App.css';
import Product from './Product';
import AddProduct from './AddProduct';
import {useSelector } from "react-redux";
import { isEmpty } from "./Utils";


function App() {

  const products = useSelector((state) => state.productReducer);
 
  return (
    <div>
      <section class="articles">
        {!isEmpty(products) && products.map((product, i) => (
          <Product key={i} title={product.title} description={product.description}
            categories={product.categories.toString()} basePrice={product.basePrice}
            salePrice={product.salePrice} imageUrl={product.imageUrl}>
          </Product>
        ))}
      </section>
      <AddProduct productsNumber={products.length}></AddProduct>
    </div>
  );
}

export default App;
