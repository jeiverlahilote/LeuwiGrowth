import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../image/Logo 2.png';

const Navbar = () => {
  return (
    <nav>
        <div class="logo">
            <img src={logo} alt="" />
        </div>
      <ul>
        <li><Link to="/">Beranda</Link></li>
        <li><Link to="/shop">HasilTani</Link></li>
        <li><Link to="/vacant">Lahan</Link></li>
        <li><Link to="/explore">Wisata</Link></li>
        <li><Link to="/project">ProyekPertatnian</Link></li>
        <li><Link to="/forum">Diskusi</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
