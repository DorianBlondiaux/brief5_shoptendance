import React from 'react'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import Products from "./Products";

export const ProductFilter = () => {

    const { categorie } = useParams();
    const products = useSelector((state) => state.productReducer);

    return (
        <Products products={products.filter((product) => product.categories === categorie)}></Products>
    )
}
