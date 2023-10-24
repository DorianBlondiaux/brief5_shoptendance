import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Navbar = () => {
    
    const products = useSelector((state) => state.productReducer);
    const categories = [...new Set(products.data.map((item) => item.categories))];

    return (
        <ul>
            <li key="0"><Link to="/">Accueil</Link></li>
            {categories.map((elem, i) => <li key={i+1}><Link  to={`/filter/${elem}`}>{elem}</Link></li>)}
        </ul>
    )
}
