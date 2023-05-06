import React, { useState } from 'react';
import { Redirect, withRouter } from 'react-router-dom';

const Login = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    if (username === "mor_2314" && password === "83r5^_") {
      console.log('Login success!');
      history.push('/');
    } else {
      setErrorMessage('Invalid credentials');
    }
}

  return (
    <div className="container">
      <div className="columns is-centered">
        <div className="column is-half">
          <h2 className="title has-text-centered">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="username" className="label">Username</label>
              <div className="control">
                <input type="text" id="username" className="input" value={username} onChange={handleUsernameChange} />
              </div>
            </div>
            <div className="field">
              <label htmlFor="password" className="label">Password</label>
              <div className="control">
                <input type="password" id="password" className="input" value={password} onChange={handlePasswordChange} />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button type="submit" className="button is-primary">Login</button>
              </div>
            </div>
          </form>
          {errorMessage && <p className="has-text-danger">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default withRouter(Login);
