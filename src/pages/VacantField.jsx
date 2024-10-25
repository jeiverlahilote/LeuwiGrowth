import React, { useState } from 'react';

const VacantField = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="vacant-field-container">
      {/* Bagian gambar dan detail */}
      <div className="image-and-details">
        <div className="main-image">
          <img src="https://images.pexels.com/photos/1081915/pexels-photo-1081915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Lahan Hutan Kelapa" />
        </div>
        <div className="thumbnail-images">
          <img src="https://images.pexels.com/photos/4872145/pexels-photo-4872145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 1" />
          <img src="https://images.pexels.com/photos/7980413/pexels-photo-7980413.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 2" />
          <img src="https://images.pexels.com/photos/4872140/pexels-photo-4872140.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 3" />
          <div className="thumbnail-more">
            <span>+4 Lainnya</span>
          </div>
        </div>
      </div>

      {/* Bagian informasi produk */}
      <div className="product-info">
        <h2>Lahan Hutan Kelapa 200 m²</h2>
        <p>10rb+ telah konsultasi</p>
        <p className="price">Rp 12.000.000</p>

        <p className="description">
          Terletak di Desa Leuwimalang yang asri, lahan hutan kelapa seluas 200m² ini menawarkan peluang ideal untuk berbagai kegiatan pertanian atau perkebunan.
          Berada di lokasi yang strategis dengan akses mudah dari pusat desa, lahan ini dikelilingi oleh pemandangan alam yang indah dan udara segar.
        </p>

        <div className="action-container">
          <div className="quantity-container">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="button-group">
            <button className="consult-button">Mulai Konsultasi</button>
            <button className="favorite-button">❤️</button>
          </div>
        </div>
      </div>

      {/* Bagian detail */}
      <div className="detail-section">
        <h3>Detail</h3>
        <p><strong>Luas Lahan:</strong> 200 meter persegi (200m²)</p>
        <p><strong>Lokasi:</strong> Desa Leuwimalang, kawasan yang tenang dan subur, cocok untuk kegiatan agrikultur.</p>
        <p><strong>Tipe Lahan:</strong> Lahan pertanian/kebun siap pakai, dengan kualitas tanah yang subur dan cocok untuk berbagai jenis tanaman hortikultura maupun proyek pertanian organik.</p>
        <p><strong>Keunggulan:</strong></p>
        <ul>
          <li>Akses mudah ke jalan utama desa</li>
          <li>Sumber air alami dari sungai terdekat</li>
          <li>Iklim mendukung untuk pertumbuhan tanaman sepanjang tahun</li>
          <li>Lingkungan alami dan hijau</li>
          <li>Potensi pengembangan untuk berbagai proyek pertanian</li>
        </ul>
      </div>

      {/* Bagian lihat lokasi */}
      <div className="location-section">
        <h3>Lihat Lokasi:</h3>
        <img src="https://thumb.viva.id/vivagadget/1265x711/2023/12/21/658444e4e937f-google-maps_.jpg" alt="Lokasi" />
      </div>

      {/* Bagian lahan serupa */}
      <div className="similar-fields">
        <h3>Lahan Serupa</h3>
        <div className="similar-fields-grid">
          <div className="similar-field">
            <img src="https://images.pexels.com/photos/4872145/pexels-photo-4872145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Lahan Serupa 1" />
            <p>Lahan 1</p>
          </div>
          <div className="similar-field">
            <img src="https://images.pexels.com/photos/4872145/pexels-photo-4872145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Lahan Serupa 2" />
            <p>Lahan 2</p>
          </div>
          <div className="similar-field">
            <img src="https://images.pexels.com/photos/4872145/pexels-photo-4872145.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Lahan Serupa 3" />
            <p>Lahan 3</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VacantField;
