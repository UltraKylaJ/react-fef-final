import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs';
import Home from './Home';
import Welcome from './Welcome';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<Welcome />}/>
          <Route path='about-us' element={<AboutUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
