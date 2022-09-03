import React from "react";
import { Route, Routes, BrowserRouter   } from "react-router-dom";
import Home from './pages/Home';
import Searched from './pages/Searched';
import Recipe from './pages/Recipe';
import Favorites from './pages/Favorites';

import './App.css';

import { FavoritesProvider } from './FavoritesContext';

console.log('app js works fine');

function App() {
  return (
    <FavoritesProvider>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/searched/:search" element={<Searched />} />
          <Route exact path="/recipe/:name" element={<Recipe />} />
          <Route exact path="/favorites" element={<Favorites />} />
        </Routes>
      </BrowserRouter  >
    </FavoritesProvider>
  );
}

export default App;
