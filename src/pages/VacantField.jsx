import React from 'react';
import profil from '../image/Ellipse 5.png';
import maps from '../image/maps.png';
import lahan from '../image/sawah2.jpg';
import lahan2 from '../image/sawah1.jpg';
import lahan1 from '../image/lowongan3.jpg';
import lahan3 from '../image/lowongan1.jpg';



const VacantField = () => {
  return (
    <div className="vacant-field-container">
      {/* Title and Participants */}
      <div className="main-content">
        <h2 className="field-title">6°40'13.5"S 106°55'51.5"E</h2>
        <p className="participants">(213 orang bertanya)</p>
      </div>

      {/* Image of the field */}
      <div className="image-container">
        <img src={lahan} alt="Vacant Field" className="single-field-image" />
      </div>

      {/* Upload date */}
      <div className="upload-date">
        <p>Diunggah sejak September 2023</p>
      </div>

      {/* Description */}
      <div className="field-description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s...
        </p>
        <h3 className="field-price">Mulai dari Rp. 8.000.000</h3>
        <button className="info-button">Mulai Negosiasi!</button>
      </div>

      {/* Map Section */}
      <div className="location-section">
        <h4>Lihat Kondisi Lokasi Terkini</h4>
        <img src={maps} alt="Lokasi Map" className="map-image" />
        <button className="google-maps-button">Lihat di Google Maps</button>
      </div>

      {/* Comments Section */}
      <div className="comments-section">
        <h4>Komentar</h4>
        <div className="comment-box">
          <div className="comment">
            <p>Jeiver si soft-spoken: Kak bisa ditawar ceban gak</p>
          </div>
          <div className="comment">
            <p>Jeiver si Petani Toge: Mending kamu hapus akun</p>
          </div>
          <div className="comment">
            <p>Jeiver si soft-spoken: Ya maap kak</p>
          </div>
        </div>
      </div>

      {/* Profile Section */}
      <div className="profile-section">
        <div className="profile-container">
          <img src={profil} alt="Jeiver si Petani Toge" className="profile-image" />
          <div className="profile-info">
            <h4>Jeiver si Petani Toge</h4>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
              the industry's standard dummy text ever since the 1500s...
            </p>
            <button className="profile-button">Kunjungi lebih lanjut</button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="related-products">
        <h4>Produk Serupa</h4>
        <div className="job-grid">
          <img src={lahan2} alt="Product 1" />
          <img src={lahan1} alt="Product 2" />
          <img src={lahan3} alt="Product 3" />
        </div>
      </div>
    </div>
  );
};

export default VacantField;
