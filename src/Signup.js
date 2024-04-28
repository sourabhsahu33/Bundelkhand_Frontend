import React, { useState } from 'react';
import './Signup.css'; 
import axios from 'axios';

const Signup = ({ onClose }) => {
  
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const user = {
    username,
    firstName,
    lastName,
    mobileNo,
    password,
    email
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://bundelkhand-backend.onrender.com/user_reg', user).then(response => {
      document.getElementById("display_user_reg").innerHTML = response.data;
      document.getElementById("display_user_reg").style.color = "green";
    }).catch(error => {
      document.getElementById("display_user_reg").innerHTML = error.response.data;
      console.error('Error sending user registration request:', error);
    });  
  };

  const handlelogin = (e) => {
    onClose();
  };

  return (
      <div className="signup-container">
        <div className="signup-content">
          {/* <span className="close-btn" onClick={onClose}>&times;</span> */}
          <h2> .. Login / SignUp .. </h2>
          <form className="signupformm">
            <div className="form-group">
              <label className='signup_labels'>Username:</label>
              <input className='usr_reg_inputs' type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
              <div className='validate'></div>
            </div>
            <div className="form-group">
              <label className='signup_labels'>First Name:</label>
              <input className='usr_reg_inputs' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
              <div className='validate' ></div>
            </div>
            <div className="form-group">
              <label className='signup_labels'>Last Name:</label>
              <input  className='usr_reg_inputs' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
              <div className='validate'></div>
            </div>
            <div className="form-group">
              <label className='signup_labels' >Mobile Number:</label>
              <input className='usr_reg_inputs' type="tel" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} required />
              <div className='validate'></div>
            </div>
            <div className="form-group">
              <label className='signup_labels' >Password:</label>
              <input className='usr_reg_inputs' type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
              <div className='validate'></div>
            </div>
            <div className="form-group">
              <label className='signup_labels' >Email:</label>
              <input className='usr_reg_inputs' type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <div className='validate'></div>
            </div>
            <div className='buttons_S'>
              <button className="usr_reg_btns" type="submit" onClick={handleSubmit}><i className="fa-solid fa-user-plus"></i>  Register</button>
              <button className="usr_reg_btns" type="submit" onClick={handlelogin} ><i className="fa-solid fa-circle-arrow-right"></i> Login</button>
            </div>
          </form>
          <div id='display_user_reg'></div>
        </div>
      </div>
  );

};

export default Signup;
