import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from "react-redux";
import "./productComponent.css";

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, image, price, category } = product;
    return (
      <div class="col" key={id}>
        <Link to={`/product/${id}`}>
          <div class="card h-100">
            <img src={image} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p>${price}</p>
              <p class="card-text">{category}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;