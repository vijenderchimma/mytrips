// Header.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './index.css';
import Cookies from 'js-cookie';

const Header = () => {
  const navigate = useNavigate()
  
  const onClickLogoutButton = () => {
    Cookies.remove("jwt_token")
    navigate("/login",{ replace: true })
  }


  return (
  <nav className='nav-container'>
    <img src="https://i.ibb.co/5jZrCq7/mytrips-black-logo.png" className='website-logo' alt="website logo" />
    <ul className='links-container'>
      <li><Link to="/" className='nav-link'>Home</Link></li>
      <li><Link to = "/locationform" className='nav-link'>LocationForm</Link></li>
      <li><Link to="/temples" className='nav-link'>Temples</Link></li>
      <li><Link to="/waterfalls" className='nav-link'>Waterfalls</Link></li>
      <li><Link to ="/trekking" className='nav-link'>Trekking</Link></li>
      <li><Link to="/About" className='nav-link'>About</Link></li>
      <li><Link to="/contact" className='nav-link'>Contact</Link></li>
    </ul>
    <button className='logout-button' onClick={onClickLogoutButton}>Logout</button>
  </nav>
);
  }
export default Header;

