import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import ProductList from './ProductList';
import Product from './Product';
import Welcome from './Welcome';
import NewProduct from './NewProduct';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route index element={<Welcome />}/>
            <Route path='about-us' element={<AboutUs />} />
            <Route path='products' element={<ProductList />} >
              <Route index element={<p>Select a product for more details.</p>} />
              <Route path='new' element={<NewProduct />} />
              <Route path=':productId/edit' element={<NewProduct />} />
              <Route path=':productId' element={<Product />} />
              <Route path='*' element={<h1>Product Not Found</h1>} />
            </Route>
          </Route>
          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
