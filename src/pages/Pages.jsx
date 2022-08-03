import React from 'react'
import {Route, Routes, useLocation } from 'react-router-dom';
import Home from "./Home";
import Cuisine from './Cuisine';
import Searched from './Searched';
import Recipe from './Recipe';
import { AnimatePresence } from 'framer-motion';

function Pages() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        {/* If the path matches / which is the homepage, then render the Home component */}
          <Route path="/" element={<Home />} />
          <Route path="/cuisine/:type" element={<Cuisine />} /> {/* adding ":/:type" allows us to go to cuisine/italian and so on. */}
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
      </Routes>
    </AnimatePresence>
  )
}

export default Pages