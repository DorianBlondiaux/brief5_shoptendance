import './App.css';
import Product from './Product';
import AddProduct from './AddProduct';
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { Navbar } from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductFilter } from './ProductFilter';


function App() {

  const products = useSelector((state) => state.productReducer);

  if (isEmpty(products)) {
    return <div>Loading ...</div>
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Navbar />
            <section className="articles">
              {products.map((product, i) => (
                <Product key={i} title={product.title} description={product.description}
                  categories={product.categories.toString()} basePrice={product.basePrice}
                  salePrice={product.salePrice} imageUrl={product.imageUrl}>
                </Product>
              ))}
            </section>
            <AddProduct productsNumber={products.length}></AddProduct>
          </div>
        }>
        </Route>
        <Route path="/filter/:categorie" element={
          <ProductFilter></ProductFilter>
        }>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
