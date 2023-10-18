import React from "react";

function Product(props) {
  return (
    <article>
      <div className="article-wrapper">
        <figure>
          <img src={props.imageUrl} alt="" />
        </figure>
        <div className="article-body">
          <h4 className="card-content">{props.title}</h4>
          <div className="card-content">{props.description}</div>
          <div className="card-content">Catégorie: {props.categories}</div>
          <div className="card-content">Prix: {props.basePrice}$</div>
          <div className="card-content">Prix avec réduction: {props.salePrice}$</div>
        </div>
      </div>
    </article>
  );

}


export default Product;