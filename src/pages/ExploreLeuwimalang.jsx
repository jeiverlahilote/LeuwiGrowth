import React from 'react';
import homepage from '../image/homepage.jpg';
import destinasi1 from '../image/destinasi1.jpg';
import destinasi2 from '../image/destinasi2(1).jpg';
import destinasi3 from '../image/destinasi3(1).jpg';

const ExploreLeuwimalang = () => {
  return (
    <div className="explore-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <img src={homepage} alt="Leuwi Malang" />
        </div>
        <div className="hero-text">
          <h1>Wisata Kebun Teh Si Teteh</h1>
          <p>Wisata Kebun Teh ⭐ ⭐ ⭐ ⭐  (241 ulasan)</p>
        </div>
      </section>

      {/* Review Section */}
      <section className="review-section">
        <h2>Wisata Kebun Lahilote</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>
      </section>

      {/* Package Section */}
      <section className="package-section">
        <h2>Paket Wisata Liburan</h2>
        <div className="package-grid">
          <div className="package-item">
            <h3>Paket Liburan Wisata Kebun Lahilote Reguler</h3>
            <ul>
              <li>Tour Guide Professional</li>
              <li>Transportasi (Titik Kumpul Jakarta)</li>
              <li>Penginapan Homestay</li>
              <li>Include makan 3x</li>
            </ul>
            <p className="price">Rp. 170.000</p>
            <button className='main'>PESAN SEKARANG!</button>
          </div>
          <div className="package-item">
            <h3>Paket Liburan Wisata Kebun Lahilote Premium</h3>
            <ul>
              <li>Tour Guide Professional</li>
              <li>Penginapan Homestay</li>
              <li>Include makan 3x</li>
              <li>Digendong sampai tujuan</li>
            </ul>
            <p className="price">Rp. 1.700.000</p>
            <button className='main'>PESAN SEKARANG!</button>
          </div>
        </div>
      </section>

      {/* Other Products Section */}
      <section className="other-products">
        <h2>Temukan wisata menarik lainnya!</h2>
        <div className="product-grid">
          <div className="product-item">
            <img src={destinasi1}alt="Wisata 1" />
          </div>
          <div className="product-item">
            <img src={destinasi2} alt="Wisata 2" />
          </div>
          <div className="product-item">
            <img src={destinasi3} alt="Wisata 3" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreLeuwimalang;
