import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Landing from './components/Landing';
import AllProducts from './components/AllProducts';
import Checkout from './components/Checkout';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route exact path="/"  element={<Landing />} />
        <Route path="categories/:category"  element={<AllProducts />} />
        <Route path="Checkout"  element={<Checkout />} />
        <Route path="products/:id" element={<ProductInfo />} />
      </Routes>
    </>
  );
}

export default App;
