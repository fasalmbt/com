import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Header from "./Header";

const SingleProduct = ({ match }) => {
  const [product, setProduct] = useState({});
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${match.params.id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [match.params.id]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      setCart(cartItems);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = () => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <>
      <Header />
      <div className="container mt-6">
        <nav className="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>&nbsp;{product.category}&nbsp;</li>
            <li className="is-active">
              <Link to={`/product/${match.params.id}`}>{product.title}</Link>
            </li>
          </ul>
        </nav>
        <div className="columns">
          <div className="column is-half">
            <figure className="image is-square">
              <img src={product.image} alt={product.title} />
            </figure>
          </div>
          <div className="column">
            <h1 className="title">{product.title}</h1>
            <p className="subtitle">${product.price}</p>
            <div className="is-flex is-align-items-center">
              <FaStar className="has-text-warning" />
              <FaStar className="has-text-warning" />
              <FaStar className="has-text-warning" />
              <FaStar className="has-text-warning" />
              <FaStar className="has-text-grey-light" />
              <p className="ml-2">(10)</p>
            </div>
            <hr />
            <p>{product.description}</p>
            <br />
            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
              <div className="control">
                <button className="button is-link">Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
