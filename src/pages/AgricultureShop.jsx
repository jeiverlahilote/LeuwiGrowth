import React from 'react';
import hasilpanen1 from '../image/hasilpanen1.jpg';
import jagung from '../image/image(1).png';
import ubi from '../image/ubi.jpg';
import sayur from '../image/sayur.jpg';
import pisang from '../image/gabungan.jpg';
import profil from '../image/Ellipse 5.png';


const AgricultureShop = () => {
  return (
    <div className="agriculture-shop">
      <div className="agriculture-header">
        <h1>Agriculture Shop</h1>
        <p>Here you can find the best products from Leuwimalang's farmers.</p>
      </div>

      <div className="product-detail">
        <div className="product-image">
          <img src={jagung} alt="Jagung Hawai" />
        </div>
        <div className="product-info">
          <h2>Jagung Hawai</h2>
          <p>⭐⭐⭐⭐4.5 (241 Ulasan)</p>
          <p>10rb+ Produk Terjual</p>
          <p>Rp. 7.600 per 100 gr</p>
          <button>PESAN SEKARANG!</button>
        </div>
      </div>

      <div className="product-description">
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
        </p>
      </div>

      <div className="author-section">
        <h3>Dari Jeiver si Petani Toge</h3>
        <div className="author-info">
          <div className="author-profile">
            <img src={profil} alt="Jeiver si Petani Toge" />
            <h4>Jeiver si Petani Toge</h4>
            <p>Tips and Trick : BUDI DAYA IKAN TERI</p>
            <button>Kunjungi lebih lanjut</button>
          </div>
        </div>
      </div>

      <div className="similar-products">
        <h3>Produk Serupa</h3>
        <div className="product-grid">
          <div className="product-item">
            <img src={pisang} alt="Produk 1" />
          </div>
          <div className="product-item">
            <img src={sayur} alt="Produk 2" />
          </div>
          <div className="product-item">
            <img src={ubi} alt="Produk 3" />
          </div>
          <div className="product-item">
            <img src={pisang} alt="Produk 3" />
          </div>
          <div className="product-item">
            <img src={sayur} alt="Produk 3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgricultureShop;
