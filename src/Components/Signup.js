import React, { useState } from 'react';

function Signup() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupMessage, setSignupMessage] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // You can perform validation or any client-side logic here
    if (fullName && email && password) {
      setSignupMessage('Congratulations! You have successfully signed up.');
    } else {
      setSignupMessage('Error: Please fill in all fields.');
    }
  };
return (
    <div className="signup-container">
      <div className="signup-background"></div>
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
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
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  Sign Up
</button>
      </form>
    </div>
  );
}

export default Signup