import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProduct } from "../redux/actions/productActions";
import "./productDetail.css"

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const product = useSelector((state) => state.product);
  const { image, title, category, description, price } = product;

  const dispatch = useDispatch();
  console.log(productId);

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log("Err", err);
      });
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail();
  }, [productId]);

  const handleClick = () => {
    navigate(-1)
  }
  return (
    <div>
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button className="navbar-brand" onClick={handleClick}>
                Shop-Now
              </button>
              <button >
                Log out
              </button>
            </div>
          </nav>
          <div class="card" >
            <img src={image} class="card-img-top" alt="..." style={{ width: "18rem" }} />
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{description}</p>
              <button href="/" class="btn btn-primary">
                Add to Cart
              </button>
              <span class="card-text">${price}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;