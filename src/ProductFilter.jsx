import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { isEmpty } from "./Utils";
import Products from "./Products";

export const ProductFilter = () => {

    const { categorie } = useParams();
    const products = useSelector((state) => state.productReducer);

  if (isEmpty(products)) {
    return <div>Loading ...</div>
  }
    return (
        <Products products={products.data.filter((product) => product.categories === categorie)}></Products>
    )
}
