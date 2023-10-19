import React from 'react'
import { useParams } from "react-router-dom";
import Product from './Product';
import AddProduct from './AddProduct';
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import { Navbar } from './Navbar';

export const ProductFilter = () => {

    const { categorie } = useParams();
    const products = useSelector((state) => state.productReducer);

  if (isEmpty(products)) {
    return <div>Loading ...</div>
  }
    return (
        <div>
            <Navbar />
            <section className="articles">
                {products.filter((product) => product.categories == categorie).map((product, i) => (
                    <Product key={i} title={product.title} description={product.description}
                        categories={product.categories.toString()} basePrice={product.basePrice}
                        salePrice={product.salePrice} imageUrl={product.imageUrl}>
                    </Product>
                ))}
            </section>
            <AddProduct productsNumber={products.length}></AddProduct>
        </div>
    )
}
