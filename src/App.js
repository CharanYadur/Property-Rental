import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import './components/style.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        {/* <Route path="/wishlist" element={<Wishlist />} /> */}
        {/* <Route path="/profile" element={<Profile />} /> */}
      </Routes>
    </>
  );
}

export default App;
