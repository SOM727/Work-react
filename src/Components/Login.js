import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (email === "runtime@gmail.com" && password === "1234") {
      setLoginMessage("Congratulations! You have successfully logged in.");
      // You can navigate to another page here if needed.
    } else {
      setLoginMessage("Error: Invalid email or password.");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-background"></div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Log In
        </button>
        <div>
          <p>
            <b style={{ color: "white" }}>Don't have an account?</b>
            <Link to="/sign">Sign up</Link>
          </p>
        </div>
        <p>{loginMessage}</p>
      </form>
    </div>
  );
}

export default Login;