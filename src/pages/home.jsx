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
    <div className="homepage-container">
      {/* Banner Section */}
      <div className="banner">
        <h1>Hasil Tani.</h1>
        <p>Jelajahi hasil tani segar dari Desa Leuwimalang, langsung dari petani lokal kami.Dukung pertanian berkelanjutan dan nikmati kualitas terbaik dari hasil bumi kami.</p>
        <button className="explore-button">Jelajahi Sekarang</button>
      </div>

      {/* Header Section */}
      <section className="hero-section-home">
  <div className="hero-about">
    <h2>Tentang Desa Leuwi Malang.</h2>
  </div>
  <div className="hero-content">
    <div className="hero-text-home">
      <p>
        Desa Leuwimalang merupakan Desa yang berada di daerah dataran,<br />
        dengan ketinggian ± 700 – 800 meter di atas permukaan laut (MDPL).<br />
        Desa Leuwimalang memiliki luas wilayah 135.188 Ha, terdiri dari 3 RW dan 14 RT <br />
        serta 3 Dusun, yaitu Dusun 1, Dusun 2, dan Dusun 3. Dengan batas-batas wilayah:<br />
        Sebelah Utara Desa Jogjogan, Sebelah Selatan Kelurahan Cisarua, Sebelah Timur Desa Kopo,<br />
        dan Sebelah Barat Desa Cilember.<br />
        Jarak dari Desa ke Kecamatan 0.6 Km, jarak ke Ibu Kota Kabupaten Bogor 50 Km,<br />
        ke Ibu Kota Provinsi Jawa Barat di Bandung 100 Km, dan ke Ibu Kota Negara di Jakarta 80 Km.
      </p>
    </div>
    <div className="hero-image">
      <img src="https://images.pexels.com/photos/2165688/pexels-photo-2165688.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Leuwimalang" />
    </div>
  </div>
</section>


      {/* Our Product Section */}
      {/* <section className="product-section">
        <h2 style={{ color: 'black' }}>Our Product</h2>
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
        </div>
        
      </section> */}

      <div className="products-section">
        <h2>Produk Favorit.</h2>
        <div className="products-grid">
          <div className="product-item">
            <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1629681326/attached_image/9-manfaat-tomat-buah-yang-disangka-sayur-0-alodokter.jpg" alt="Tomat" />
            <h3>Tomat</h3>
            <p>Tomat segar hasil pertanian Desa Leuwimalang.</p>
            <button className="more-button">Rp. 10.000</button>
          </div>
          <div className="product-item">
            <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1657501759/attached_image/tak-hanya-pedas-banyak-manfaat-cabai-untuk-kesehatan-tubuh.jpg" alt="Cabai Merah" />
            <h3>Cabai Merah</h3>
            <p>Cabai merah segar dari Leuwimalang.</p>
            <button className="more-button">Rp. 15.000</button>
          </div>
          <div className="product-item">
            <img src="https://images.pexels.com/photos/21393/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lahan Tani" />
            <h3>Lahan Tani (100 m²)</h3>
            <p>Lahan pertanian subur di Desa Leuwimalang.</p>
            <button className="more-button">Rp. 6.000.000</button>
          </div>
        </div>
      </div>

      <div className="discussion-section">
        <h2>Mulai Berdiskusi.</h2>
        <div className="discussion-grid">
          <div className="discussion-item">
            <img src="https://images.pexels.com/photos/2131784/pexels-photo-2131784.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Pesona Wisata" />
            <h3><b>Menjelajahi Pesona Wisata Alam Leuwimalang</b></h3>
            <p>Nikmati keindahan alam Leuwimalang dengan destinasi wisata yang menenangkan jiwa.</p>
          </div>
          <div className="discussion-item">
            <img src='https://images.pexels.com/photos/974314/pexels-photo-974314.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Investasi Lahan" />
            <h3><b>Peluang Investasi Lahan di Desa Leuwimalang</b></h3>
            <p>Lahan di Leuwimalang menawarkan peluang investasi yang menarik.</p>
          </div>
          <div className="discussion-item">
            <img src="https://images.pexels.com/photos/1268101/pexels-photo-1268101.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Potensi Pertanian" />
            <h3><b>Menggali Potensi Pertanian Leuwimalang</b></h3>
            <p>Desa Leuwimalang dikenal dengan hasil tani berkualitas tinggi.</p>
          </div>
        </div>
        <button className="more-button">Selengkapnya</button>
      </div>
    </div>
  );
};

export default Home;
