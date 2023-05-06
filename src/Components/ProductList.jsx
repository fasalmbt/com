import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    let url = "https://fakestoreapi.com/products";
    if (selectedCategory) {
      url += `/category/${selectedCategory}`;
    }
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedCategory]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    const response = await axios.get(`https://fakestoreapi.com/products`);
    const filteredProducts = response.data.filter((product) =>
      Object.values(product).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setProducts(filteredProducts);
  };

  return (
    <section className="section">
      <div className="container">
        <div className="columns">
          <div className="column is-6">
            <form onSubmit={handleSearch}>
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search for products"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                  />
                </div>
                <div className="control">
                  <button className="button is-info" type="submit">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div className="column is-6">
            <div className="buttons has-addons">
              <button
                className={`button ${
                  selectedCategory === null ? "is-primary is-selected" : ""
                }`}
                onClick={() => handleCategorySelect(null)}
              >
                All
              </button>
              <button
                className={`button ${
                  selectedCategory === "men clothing" ? "is-selected" : ""
                }`}
                onClick={() => handleCategorySelect("men's%20clothing")}
              >
                Men's Clothing
              </button>
              <button
                className={`button ${
                  selectedCategory === "jewelery" ? "is-selected" : ""
                }`}
                onClick={() => handleCategorySelect("jewelery")}
              >
                Jewelery
              </button>
              <button
                className={`button ${
                  selectedCategory === "electronics" ? "is-selected" : ""
                }`}
                onClick={() => handleCategorySelect("electronics")}
              >
                Electronics
              </button>
              <button
                className={`button ${
                  selectedCategory === "women clothing" ? "is-selected" : ""
                }`}
                onClick={() => handleCategorySelect("women's%20clothing")}
              >
                Women's Clothing
              </button>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="columns is-multiline">
          {products.map((product) => (
            <div key={product.id} className="column is-one-third">
              <div className="card has-shadow">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img
                      src={product.image}
                      alt={product.title.substring(0, 25)}
                      className="product-image"
                    />
                  </figure>
                </div>
                <div className="card-content">
                  <Link to={`/products/${product.id}`}>
                    <p className="title is-4">
                      {product.title.substring(0, 25)}
                    </p>
                  </Link>
                  <p className="subtitle is-6">${product.price}</p>
                  <Link to={`/products/${product.id}`}>
                    <button className="button is-link">
                      <span>View details</span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        {products.length === 0 && (
          <>
            <br />
            <div className="notification">No products found.</div>
            <br />
          </>
        )}
      </div>
    </section>
  );
};

export default ProductList;
