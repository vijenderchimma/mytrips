// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Header = () => (
  <nav className='nav-container'>
    <img src="https://i.ibb.co/5jZrCq7/mytrips-black-logo.png" className='website-logo' alt="website logo" />
    <ul className='links-container'>
      <li><Link to="/" className='nav-link'>Home</Link></li>
      <li><Link to="/temples" className='nav-link'>Temples</Link></li>
      <li><Link to="/waterfalls" className='nav-link'>Waterfalls</Link></li>
      <li><Link to ="/trekking" className='nav-link'>Trekking</Link></li>
      <li><Link to="/About" className='nav-link'>About</Link></li>
      <li><Link to="/contact" className='nav-link'>Contact</Link></li>
      <li><Link to="/login" className='nav-link'>LogIn</Link></li>
      <li><Link to = "/register" className='nav-link'>Register</Link></li>
    </ul>
  </nav>
);

export default Header;

