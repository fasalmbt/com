import React, { useState } from 'react';

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [username, setUsername] = useState('');
  const cart = JSON.parse(localStorage.getItem('cart')) || [];

  const handleToggle = () => {
    setIsActive(!isActive);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  const handleLogin = () => {
    fetch('https://fakestoreapi.com/auth/login',{
      method:'POST',
      body:JSON.stringify({
        username: "mor_2314",
        password: "83r5^_"
      })
    })
    .then(res=>res.json())
    .then(json=>{
      if (json.token && json.username === 'mor_2314' && json.password === '83r5^_') {
        setIsLoggedIn(true);
        setUsername(json.username);
        console.log('Login success!');
      } else {
        console.log('Login failed!');
      }
    });
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
            {!isLoggedIn && ( 
                <a className="button is-outlined" onClick={handleLogin} href='/login'>
                  <span className="icon" style={{ color: '#d9ac7c' }}>
                    <i className="fas fa-user"></i>
                  </span>
                  <span style={{ color: '#d9ac7c' }}>Login</span>
                </a>
              )}
              {isLoggedIn && (
                <div className="dropdown is-right is-hoverable">
                  <div className="dropdown-trigger">
                    <button className="button is-outlined" aria-haspopup="true" aria-controls="dropdown-menu">
                      <span style={{ color: '#d9ac7c' }}>{username}</span>
                      <span className="icon is-small">
                        <i className="fas fa-angle-down" aria-hidden="true"></i>
                      </span>
                    </button>
                  </div>
                  <div className="dropdown-menu" id="dropdown-menu" role="menu">
                    <div className="dropdown-content">
                      <a className="dropdown-item" onClick={handleLogout}>
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              )}
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