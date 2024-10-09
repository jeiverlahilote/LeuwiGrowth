import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      {/* Header Section */}
      <section className="hero-section">
        <div className="hero-text">
          <h1>Jelajahi Keindahan Desa Leuwi Malang</h1>
        </div>
        <div className="hero-image">
          <img src="" alt="Leuwi Malang" />
        </div>
      </section>

      {/* Our Product Section */}
      <section className="product-section">
        <h2>Our Product</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
        <div className="product-grid">
          <div className="product-item"> <p>tes</p></div>
          <div className="product-item"></div>
          <div className="product-item"></div>
          <div className="product-item"></div>
          <div className="product-item"></div>
          <div className="product-item"></div>
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
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
          </div>
          <div className="top-selling-item">
            <div className="top-selling-image"></div>
            <h3>Judul</h3>
            <p>lorem ipsum</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
