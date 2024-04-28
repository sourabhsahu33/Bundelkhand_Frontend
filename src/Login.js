import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Login = ({ onClose, LoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const user = { username, password };

  const handleSignup = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    axios.post('https://bundelkhand-backend.onrender.com/user_login', user)
      .then(response => {
        LoggedIn();
      })
      .catch(error => {
        if (error.response && error.response.data) {
          document.getElementById("display_user_login").innerHTML = error.response.data;
        } else {
          console.error('Error sending user login request:', error);
        }
      });  
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <form className='signupformm' onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label className='signup_labels'>Username:</label>
            <input className='usr_reg_inputs' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className='signup_labels'>Password:</label>
            <input className='usr_reg_inputs' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <div className='validate'></div>
          </div>
          <div className='buttons_S'>
            <button className="usr_reg_btns" type="button" onClick={handleSignup}><i className="fa-solid fa-user-plus"></i> Register</button>
            <button className="usr_reg_btns" type="submit"><i className="fa-solid fa-circle-arrow-right"></i> Login</button>
          </div>
        </form>
        <div id='display_user_login'></div>
      </div>
    </div>
  );
}

export default Login;
