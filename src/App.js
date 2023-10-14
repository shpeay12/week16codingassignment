import React, { useState } from 'react'; //Imports dependencies
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import SearchPage from './Pages/SearchPage';
import FavoritesPage from './Pages/FavoritesPage';
import NavigationBar from './Components/NavigationBar';
import AddRecipePage from './Pages/AddRecipePage';
import UserRecipesPage from './Pages/UserRecipesPage';
import { RecipesProvider } from './Components/RecipesContext';


function App() { //Renders the app, uses router and routes to allow multiple pages to be accessed by the user.
    const [recipes, setRecipes] = useState([])
  return (
    <RecipesProvider>
        <Router>
            <NavigationBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/search" element={<SearchPage />} />
                <Route path="/favorites" element={<FavoritesPage />} />
                <Route path="/addrecipe" element={<AddRecipePage recipes={recipes} setRecipes={setRecipes} />} />
                <Route path="/user-recipes" element={<UserRecipesPage recipes={recipes} setRecipes={setRecipes} />} />
            </Routes>
        </Router>
      </RecipesProvider>
  );
}

export default App;