import React, { useEffect, useState } from "react";
import { FaPlus, FaMinus, FaTrashAlt } from "react-icons/fa";
import Header from "./Header";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart"));
    if (cartItems) {
      const cartItemsWithQuantity = cartItems.map((item) => ({
        ...item,
        quantity: 1,
      }));
      setCartData(cartItemsWithQuantity);
    }
  }, []);

  const handleIncreaseQuantity = (index) => {
    const updatedCart = [...cartData];
    updatedCart[index].quantity++;
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartData(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <>
      <Header />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h2 className="title has-text-centered">Your Cart</h2>
            {cartData.length ? (
              <table className="table is-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Image </th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cartData.map((cartItem, index) => (
                    <tr key={index}>
                      <td>{cartItem.title}</td>
                      <td>
                        <img src={cartItem.image} width="90" height="90" />
                      </td>
                      <td>
                        <div className="quantity">
                          <button
                            className="button"
                            onClick={() => handleDecreaseQuantity(index)}
                          >
                            <FaMinus className="icon-spacing" />
                          </button>
                          &nbsp;&nbsp;
                          <input
                            type="text"
                            value={cartItem.quantity}
                            readOnly
                            className="input is-small"
                            style={{
                              width: "4rem",
                              height: "3rem",
                              fontSize: "1.2rem",
                            }}
                          />
                          &nbsp;&nbsp;
                          <button
                            className="button"
                            onClick={() => handleIncreaseQuantity(index)}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </td>
                      <td>${cartItem.price}</td>
                      <td>
                        ${(cartItem.price * cartItem.quantity).toFixed(2)}
                      </td>
                      <td>
                        <button
                          className="button is-danger"
                          onClick={() => handleRemoveItem(index)}
                        >
                          <FaTrashAlt />
                        </button>
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan="3" className="has-text-right">
                      <strong>Total:</strong>
                    </td>
                    <td colSpan="2">
                      <strong>
                        $
                        {cartData
                          .reduce(
                            (total, item) => total + item.price * item.quantity,
                            0
                          )
                          .toFixed(2)}
                      </strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p className="has-text-centered">Your cart is empty.</p>
            )}
          </div>
        </div>
        <Link to="/checkout">
          <button class="button is-primary is-fullwidth">
            Proceed to checkout
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
