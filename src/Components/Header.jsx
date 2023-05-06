import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState('');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  

  return (
    <nav className="navbar is-spaced" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <span className="logo-text has-text-weight-bold is-primary is-size-3 is-family-serif">
            Pfact cart
          </span>
        </a>

        <a
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
          onClick={handleToggle}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-outlined" href="/cart">
                <span className="icon" style={{ color: '#d9ac7c' }}>
                  <i className="fas fa-shopping-cart"></i>
                </span>
                <span style={{ color: '#d9ac7c' }}>Cart&nbsp;</span>
                <span className="tag is-outlined">{cart.length}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;