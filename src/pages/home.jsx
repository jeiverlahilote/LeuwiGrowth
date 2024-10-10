import React from 'react';
import homepage from '../image/homepage.jpg';
import hasilpanen1 from '../image/hasilpanen1.jpg';
import hasilpanen2 from '../image/hasilpanen2.jpg';
import hasilpanen3 from '../image/hasilpanen3.jpg';
import hasilpanen4 from '../image/hasilpanen4.jpg';
import hasilpanen5 from '../image/hasilpanen5.jpg';
import hasilpanen6 from '../image/hasilpanen6.jpg';

const Home = () => {
    
  return (
    <div className="home-container">
      {/* Header Section */}
      <section className="hero-section-home">
        <div className="hero-text-home">
          <h1>Jelajahi Keindahan Desa Leuwi Malang</h1>
        </div>
        <div className="hero-image">
          <img src={homepage} alt=" Malang" />
        </div>
      </section>

      {/* Our Product Section */}
      <section className="product-section">
        <h2 style={{ color: 'black' }}>Our Product</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <div className="product-grid">
          <div className="product-item">
            <img src={hasilpanen1} alt="produk 1" />
          </div>
          <div className="product-item">
            <img src={hasilpanen2} alt="" />
          </div>
          <div className="product-item">
            <img src={hasilpanen3} alt="" />
          </div>
          <div className="product-item">
            <img src={hasilpanen4} alt="" />
          </div>
          <div className="product-item">
            <img src={hasilpanen5} alt="" />
          </div>
          <div className="product-item">
            <img src={hasilpanen6} alt="" />
          </div>
        </div>
      </section>

      {/* Top Selling Section */}
      <section className="top-selling-section">
        <h2>Top Selling This Month</h2>
        <div className="top-selling-grid">
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
            <img src={hasilpanen1} alt="" />
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
            <img src={hasilpanen3} alt="" />
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
            <img src={hasilpanen6} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
