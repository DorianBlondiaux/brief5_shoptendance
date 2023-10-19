import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    const products = useSelector((state) => state.productReducer);
    const categories = [...new Set(products.map((item) => item.categories))];

    return (
        <ul>
            {categories.map((elem) => <li><Link to={`filter/${elem}`}>{elem}</Link></li>)}
        </ul>
    )
}
