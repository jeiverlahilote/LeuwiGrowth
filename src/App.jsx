import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import AgricultureShop from './pages/AgricultureShop';
import VacantField from './pages/VacantField';
import ExploreLeuwimalang from './pages/ExploreLeuwimalang';
import FarmersProject from './pages/FarmersProjects';
import DiscussionForum from './pages/DiscussionForum';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<AgricultureShop />} />
        <Route path="/vacant" element={<VacantField />} />
        <Route path="/explore" element={<ExploreLeuwimalang />} />
        <Route path="/project" element={<FarmersProject />} />
        <Route path="/forum" element={<DiscussionForum />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;