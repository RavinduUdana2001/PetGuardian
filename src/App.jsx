import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderContent from './Components/HeaderContent/HeaderContent';
import FooterContent from './Components/FooterContent/FooterContent';
import HomePage from './Components/Pages/HomePage';
import AboutPage from './Components/Pages/AboutPage';
import ContactPage from './Components/Pages/ContactPage';
import PettrainingPage from './Components/Pages/PettrainingPage';



function App() {
  return (
    <Router>
      <HeaderContent />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pet-training" element={<PettrainingPage />} />
        
      </Routes>
      <FooterContent />
    </Router>
  );
}

export default App;
