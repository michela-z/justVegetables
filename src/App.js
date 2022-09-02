import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import Favorites from './pages/Favorites';

import './App.css';

import { FavoritesProvider } from './FavoritesContext';

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/searched/:search" element={<Searched />} />
          <Route path="/recipe/:name" element={<Recipe />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;
