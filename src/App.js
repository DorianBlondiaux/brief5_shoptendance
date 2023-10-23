import "./App.css";
import Products from "./Products";
import AddProduct from "./AddProduct";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { Navbar } from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductFilter } from "./ProductFilter";

function App() {
  const products = useSelector((state) => state.productReducer);

  if (isEmpty(products)) {
    return <div>Loading ...</div>;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Products products={products}></Products>}
        ></Route>
        <Route
          path="/filter/:categorie"
          element={<ProductFilter></ProductFilter>}
        ></Route>
      </Routes>
      <AddProduct productsNumber={products.length}></AddProduct>
    </BrowserRouter>
  );
}

export default App;
