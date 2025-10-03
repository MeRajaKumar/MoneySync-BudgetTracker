import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'; // optional styling

function Navbar() {
  return (
    <div className="nav-container">
      <div className="nav-left">
        <div className="logo">
          <img src="#" alt="MoneySync Logo" />
        </div>
      </div>
      <div className="nav-right">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Sign In / Up</Link>
      </div>
    </div>
  );
}

export default Navbar;
