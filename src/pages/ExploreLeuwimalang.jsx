import React, { useState } from 'react';
import PricingSection from '../components/pricingSection';


const ExploreLeuwimalang = () => {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => setQuantity(quantity > 1 ? quantity - 1 : 1);

  return (
    <div className="explore-leuwimalang-container">
      {/* Bagian gambar dan detail */}
      <div className="image-and-details">
        <div className="main-image">
          <img src="https://images.pexels.com/photos/50588/kuang-si-falls-waterfall-water-laos-50588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Curug Cilember" />
        </div>
        <div className="thumbnail-images">
          <img src="https://images.pexels.com/photos/14900951/pexels-photo-14900951.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 1" />
          <img src="https://images.pexels.com/photos/5820001/pexels-photo-5820001.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 2" />
          <img src="https://images.pexels.com/photos/17888975/pexels-photo-17888975/free-photo-of-batu-hutan-pohon-aliran.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="Thumbnail 3" />
          <div className="thumbnail-more">
            <span>+4 Lainnya</span>
          </div>
        </div>
      </div>

      {/* Bagian informasi produk */}
      <div className="product-info">
        <h2>Curug Cilember</h2>
        <p>10rb+ telah konsultasi</p>
        <p className="price">Rp 50.000</p>

        <p className="description">
          Curug Cilember adalah salah satu destinasi wisata alam yang terkenal di kawasan Puncak, Bogor. Curug ini terkenal dengan keindahan alamnya, terdiri dari tujuh tingkat air terjun yang mempesona, masing-masing dengan karakteristik dan ketinggian yang berbeda.
        </p>

        <div className="action-container">
          <div className="quantity-container">
            <button onClick={decreaseQuantity}>-</button>
            <span>{quantity}</span>
            <button onClick={increaseQuantity}>+</button>
          </div>
          <div className="button-group">
            <button className="reserve-button">Reservasi Sekarang</button>
            <button className="favorite-button">❤️</button>
          </div>
        </div>
      </div>

      {/* Bagian detail */}
      <div className="detail-section">
        <h3>Detail</h3>
        <p><strong>Lokasi:</strong> Desa Leuwimalang, Kecamatan Cisarua, Kabupaten Bogor, Jawa Barat</p>
        <p><strong>Jam Operasional:</strong> Check-in 14:00 WIB, Check-out 12:00 WIB</p>
        <p><strong>Fasilitas:</strong></p>
        <ul>
          <li>Area parkir luas</li>
          <li>Jalur trekking dengan penunjuk arah</li>
          <li>Gazebo dan tempat istirahat</li>
          <li>Area camping</li>
          <li>Warung makan lokal</li>
          <li>Tempat penyewaan alat renang dan safety gear</li>
        </ul>
      </div>

      {/* Bagian lihat lokasi */}
      <div className="location-section">
        <h3>Lihat Lokasi:</h3>
        <img src="https://thumb.viva.id/vivagadget/1265x711/2023/12/21/658444e4e937f-google-maps_.jpg" alt="Lokasi" />
      </div>

      {/* Bagian bundling */}
      <div className="pricing-section-wrapper">
  <PricingSection />
</div>
    </div>
  );
};

export default ExploreLeuwimalang;
