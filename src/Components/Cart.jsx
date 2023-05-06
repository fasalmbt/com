import React, { useContext } from 'react';
import Header from './Header';
import { CartContext } from '../Context/CartContext';

const Cart = () => {
  const { cartItems, removeItem } = useContext(CartContext);

  return (
    <>
      <Header />
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-three-quarters">
            <h2 className="title has-text-centered">Your Cart</h2>
            {cartItems.length === 0 ? (
              <p className="has-text-centered">Your cart is empty.</p>
            ) : (
              <table className="table is-striped">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                      </td>
                      <td>${item.price}</td>
                      <td>
                        <button
                          className="button is-danger"
                          onClick={() => removeItem(item.id)}
                        >
                          <span className="icon">
                            <i className="fas fa-trash"></i>
                          </span>
                          <span>Remove</span>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td>Total:</td>
                    <td>
                      ${cartItems.reduce((acc, item) => acc + item.price, 0)}
                    </td>
                    <td></td>
                  </tr>
                </tfoot>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
