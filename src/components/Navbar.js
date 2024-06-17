import React from 'react';
import { Link } from 'react-router-dom';
import logos from '../assets/Move1.png';
import '../styles/Navbar.css'; // Make sure this is correctly linked

const Navbar = ({ logo }) => {
  return (
    <nav>
      <div className="NavLogo">
        <div className="circle-container">
          <img src={logos} alt="Logo" className="centered-image" />
          <p>GLOW MOTION PICTURES</p>
        </div>
      </div>
      <ul>
        <li><Link to="/home">HOME</Link></li>
        <li><Link to="/works">WORKS</Link></li>
        <li><Link to="/creatives">CREATIVES</Link></li>
        <li><Link to="/contact">INFO</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;