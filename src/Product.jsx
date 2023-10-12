import React from "react";

function Product(props) {
  return (
    <div className="card text-center m-3">
        <div className="card-body-product">
            <div className ="card-content">{props.title}</div>
            <div className ="card-content">{props.description}</div>
            <div className ="card-content">{props.categories}</div>
            <div className ="card-content">{props.basePrice}</div>
            <div className ="card-content">{props.salePrice}</div>
            <div className ="card-content">{props.imageUrl}</div>
        </div>
      </div>
  );

}


export default Product;