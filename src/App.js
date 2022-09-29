import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import Products from './components/Products';
import Checkout from './components/Checkout';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/"  element={<Landing />} />
        <Route path="products"  element={<Products />} />
        <Route path="Checkout"  element={<Checkout />} />
        <Route path="products/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default App;
