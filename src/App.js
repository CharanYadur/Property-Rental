import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './components/style.css'
import PropertyDetails from './components/PropertyDetails';
import BrowseProperties from './components/BrowseProperties';
import FooterSection from './components/FooterSection';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/propertyDetails" element={<PropertyDetails />} />
        <Route path="/properties" element={<BrowseProperties />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
      </Routes>
      <FooterSection/>
    </>
  );
}

export default App;
