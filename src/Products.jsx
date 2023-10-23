import React from "react";
import Product from "./Product";

function Products(props) {
  return (
    <section className="articles">
      {props.products.map((product, i) => (
        <Product
          key={i}
          title={product.title}
          description={product.description}
          categories={product.categories.toString()}
          basePrice={product.basePrice}
          salePrice={product.salePrice}
          imageUrl={product.imageUrl}
        ></Product>
      ))}
    </section>
  );
}

export default Products;
