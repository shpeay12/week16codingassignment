import React, { useState, useEffect } from 'react';  //Sets up states
import axios from 'axios';
import FavoritesList from '../Components/FavoritesList';

function FavoritesPage() {
    const [favoriteDetails, setFavoritesDetails] = useState([]); //Manages states
    const [favorites, setFavorites] = useState([]);

    const fetchFavoriteDetails = async () => { //Fetching favorites and the details from local storage
        let detailsArray = [];
        const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        for(let id of storedFavorites) {
            const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
            detailsArray.push(response.data.meals[0]);
        }

        setFavoritesDetails(detailsArray);
    };


    useEffect(() => {
        fetchFavoriteDetails();
    }, []); 

    const handleRemoveFavorite = (removedId) => { //Handles the removal of favorites.
        const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const updatedFavorites = currentFavorites.filter(id => id !== removedId);
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

        setFavorites(updatedFavorites);
    };
    

    return ( //Returns the content using FavoritesList Component.
        <div className="text-center">
            <h2>My Favorite Recipes</h2>
            <p>Click refresh on browser after deleting a recipe.</p>
            <FavoritesList favorites={favoriteDetails} onRemoveFavorite={handleRemoveFavorite} />
        </div>
    );
}

export default FavoritesPage;

