import React from 'react';
import sawah1 from '../image/sawah1.jpg';
import sawah2 from '../image/sawah2.jpg';
import maps from '../image/maps.png';
import profil from '../image/Ellipse 5.png';
import rekomendasi1 from '../image/lowongan1.jpg';
import rekomendasi2 from '../image/lowongan2.jpg';
import rekomendasi3 from '../image/lowongan3.jpg';


const FarmersProject = () => {
  return (
    <div className="farmers-project-container">
      {/* Main content section */}
      <section className="main-content">
        <h2 className="project-title">SAWAH OM JUNIOR</h2>
        <p className="participants">(213) orang bertanya</p>

        {/* Image grid */}
        <div className="image-grid">
          <img src={sawah1} alt="Sawah 1" />
          <img src={sawah2} alt="Sawah 2" />
        </div>

        <p className="upload-date">Diunggah sejak September 2023</p>

        {/* Description */}
        <div className="project-description">
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book...
          </p>
          <button className="info-button">Informasi Lebih Lanjut</button>
        </div>

        {/* Map and location */}
        <div className="location-section">
          <p>Lihat Kondisi lokasi terkini</p>
          <img src={maps} alt="World map" className="map-image" />
          <button className="google-maps-button">Lihat di google maps</button>
        </div>
      </section>

      {/* Comments section */}
      <section className="comments-section">
        <h3>Komentar</h3>
        <div className="comment-box">
          <div className="comment">
            <p><strong>Jeiver si soft-spoken:</strong> Kak masih ada lowongan gak</p>
          </div>
          <div className="comment">
            <p><strong>Jeiver si Petani Toge:</strong> dah gaada</p>
          </div>
          <div className="comment">
            <p><strong>Jeiver si soft-spoken:</strong> Yahh okeideee</p>
          </div>
        </div>

        {/* Profile of the user (centered) */}
        <div className="profile-section">
          <div className="profile-container">
            <img src={profil} alt="Jeiver si Petani Toge" className="profile-image" />
            <div className="profile-info">
              <h4>Jeiver si Petani Toge</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s...
              </p>
              <button className="profile-button">Kunjungi lebih lanjut</button>
            </div>
          </div>
        </div>
      </section>

      {/* Related job offers */}
      <section className="related-jobs">
        <h3>Lowongan Serupa</h3>
        <div className="job-grid">
          <img src={rekomendasi1} alt="Lowongan 1" />
          <img src={rekomendasi2} alt="Lowongan 2" />
          <img src={rekomendasi3} alt="Lowongan 3" />
        </div>
      </section>
    </div>
  );
};

export default FarmersProject;
