import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from './pages/Home';
import Searched from './pages/Searched/Searched';
import Recipe from './pages/Recipe/Recipe';
import Favorites from './pages/Favorites/Favorites';
import './App.css';

import { FavoritesProvider } from './FavoritesContext';
import { GetRecipeProvider } from './GetRecipeContext';

function App() {

  return (
    <FavoritesProvider>
      <GetRecipeProvider>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/searched/:search" element={<Searched />} />
            <Route path="/recipe/:name" element={<Recipe />} />
            <Route path="/favorites" element={<Favorites />} />
          </Routes>
        </BrowserRouter>
      </GetRecipeProvider>
    </FavoritesProvider>
  );
}

export default App;
