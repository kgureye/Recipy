import React from 'react'
import {Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';

function Pages() {
  return (
      <Routes>
        {/* If the path matches / which is the homepage, then render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} /> {/* adding ":/:type" allows us to go to cuisine/italian and so on. */}
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
  )
}

export default Pages