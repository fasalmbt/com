import React from 'react';
import Swal from 'sweetalert2';

const Checkout = () => {

  const handleCheckout = () => {
    Swal.fire({
      title: 'Confirm Checkout',
      text: 'Are you sure you want to checkout?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, checkout!',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('cart');
        Swal.fire({
          title: 'Order Confirmed!',
          text: 'Thank you for your purchase.',
          icon: 'success',
          confirmButtonText: 'Ok'
        }).then(() => {
          window.location.href = '/';
        });
      }
    });
  }

  return (
    <div className="container">
      <h2 className="title">Checkout</h2>
      <button className="button is-primary is-fullwidth" onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default Checkout;
