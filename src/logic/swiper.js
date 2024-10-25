import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

const BannerSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      pagination={{ clickable: true }}
      navigation={true}
      className="mySwiper"
    >
      {/* Slide 1 */}
      <SwiperSlide>
        <div className="banner">
          <img
            src="path-to-banner-image-1"
            alt="Hasil Tani"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>Hasil Tani Desa Leuwimalang</h1>
            <p>
              Jelajahi hasil tani segar dari Desa Leuwimalang, langsung dari petani lokal kami. 
              Dukung pertanian berkelanjutan dan nikmati kualitas terbaik dari hasil bumi kami.
            </p>
            <button className="explore-button">Jelajahi Sekarang</button>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 2 */}
      <SwiperSlide>
        <div className="banner">
          <img
            src="path-to-banner-image-2"
            alt="Lahan Pertanian"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>Lahan Pertanian Subur</h1>
            <p>
              Dukung petani lokal kami dan eksplorasi lahan pertanian dengan kualitas terbaik untuk pertumbuhan hasil tani.
            </p>
            <button className="explore-button">Pelajari Lebih Lanjut</button>
          </div>
        </div>
      </SwiperSlide>
      {/* Slide 3 */}
      <SwiperSlide>
        <div className="banner">
          <img
            src="path-to-banner-image-3"
            alt="Proyek Pertanian"
            className="banner-image"
          />
          <div className="banner-content">
            <h1>Proyek Pertanian Inovatif</h1>
            <p>
              Bergabunglah dengan proyek pertanian inovatif kami untuk masa depan yang lebih berkelanjutan dan produktif.
            </p>
            <button className="explore-button">Gabung Sekarang</button>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default BannerSlider;
