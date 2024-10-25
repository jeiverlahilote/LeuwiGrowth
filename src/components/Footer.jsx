import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Logo from '../image/Logo White.png';


const Footer = () => {
  return (
    <footer>
    <div className="footer-content">
      <div className="footer-info">
        <img src={Logo} alt="" />
        <p>LeuwimalangGrowth adalah platform digital yang bertujuan memajukan Desa Leuwimalang melalui sektor agrikultur dan wisata. Temukan hasil tani segar, destinasi wisata alam yang indah, semua dalam satu tempat.</p>
      </div>
      <div className="footer-menu">
        <h3>Menu</h3>
        <ul>
          <li>Beranda</li>
          <li>Hasil Tani</li>
          <li>Lahan</li>
          <li>Wisata</li>
          <li>Proyek Pertanian</li>
          <li>Diskusi</li>
        </ul>
      </div>
      <div className="footer-contact">
        <h1>Contact Us</h1>
        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Jl. Telekomunikasi 1, Terusan Buahbatu, Bojongsoang, Telkom University</p>
        <p><FontAwesomeIcon icon={faPhone} /> Email: leuwimalanggrowth@gmail.com</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> Phone: +62-8522-0098-289</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
