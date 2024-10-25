import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import AgricultureShop from './pages/AgricultureShop';
import VacantField from './pages/VacantField';
import ExploreLeuwimalang from './pages/ExploreLeuwimalang';
import FarmersProjects from './pages/FarmersProjects';
import DiscussionForum from './pages/DiscussionForum';
import Footer from './components/Footer';
import ListProduct from './pages/listproduct';
import ListProductLahan from './pages/listproductlahan';
import ListProductWisata from './pages/listproductwisata';
import ListProjects from './pages/listproyek';
import Profil from './pages/Profil';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<ListProduct />} />
        <Route path="/vacant" element={<ListProductLahan />} />
        <Route path="/explore" element={<ListProductWisata />} />
        <Route path="/project" element={<ListProjects />} />
        <Route path="/forum" element={<DiscussionForum />} />
        <Route path="/Agricultureshop" element={<AgricultureShop />} /> {/* Rute ini dipindahkan ke dalam Routes */}
        <Route path="/VacantField" element={<VacantField />} />
        <Route path='/Profil' element={<Profil />} />
        <Route path="/ExploreLeuwimalang" element={<ExploreLeuwimalang />} />
        <Route path="/FarmersProjects" element={<FarmersProjects />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
