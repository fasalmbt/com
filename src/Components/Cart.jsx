import React, { useEffect, useState } from 'react';
import { FaPlus, FaMinus, FaTrashAlt } from 'react-icons/fa';
import Header from './Header';

const Cart = () => {
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem('cart'));
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
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  const handleDecreaseQuantity = (index) => {
    const updatedCart = [...cartData];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartData(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const handleRemoveItem = (index) => {
    const updatedCart = [...cartData];
    updatedCart.splice(index, 1);
    setCartData(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
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
                        <div className="quantity">
                          <button className="button" onClick={() => handleDecreaseQuantity(index)}>
                            <FaMinus />&nbsp;&nbsp;
                          </button>
                          <span>{cartItem.quantity}</span>
                          <button className="button" onClick={() => handleIncreaseQuantity(index)}>
                            &nbsp;<FaPlus />
                          </button>
                        </div>
                      </td>
                      <td>${cartItem.price}</td>
                      <td>${(cartItem.price * cartItem.quantity).toFixed(2)}</td>
                      <td>
                        <button className="button is-danger" onClick={() => handleRemoveItem(index)}>
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
                      <strong>${cartData.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            ) : (
              <p className="has-text-centered">Your cart is empty.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
