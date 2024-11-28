import React from 'react';
import {  Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

export default function RoutesConfig() {
  return (
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
      </Routes>
  );
}
