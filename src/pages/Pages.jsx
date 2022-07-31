import React from 'react'
import Home from "./Home";
import {Route, Routes } from 'react-router-dom';
import Cuisine from './Cuisine';

function Pages() {
  return (
      <Routes>
        {/* If the path matches / which is the homepage, then render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} /> {/* adding ":/:type" allows us to go to cuisine/italian and so on. */}
      </Routes>
  )
}

export default Pages