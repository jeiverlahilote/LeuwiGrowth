import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Agriculture Shop</Link></li>
        <li><Link to="/vacant">Vacant Field</Link></li>
        <li><Link to="/explore">Explore Leuwimalang</Link></li>
        <li><Link to="/project">Farmer's Project</Link></li>
        <li><Link to="/forum">Discussion Forum</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
