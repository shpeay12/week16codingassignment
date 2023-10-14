import React, { useState } from 'react'; //Imports dependencies
import { Card, Button } from 'react-bootstrap';
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';
import AlertNotification from './AlertNotification';
import '../CSS/FavoriteRecipeCard.css';

function RecipeCard({ meal, isFavoritePage, onDelete }) { //Creats RecipeCard component to display recipes with image, name, ingredients with measurements and instructions.
  const [showDetails, setShowDetails] = useState(false); //State hooks
  const [mealDetails, setMealDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertVariant, setAlertVariant] = useState('success');

  const fetchMealDetails = async (mealId) => { //Fetches details about the meals
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setMealDetails(data.meals[0]);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  }

  const handleButtonClick = () => { //Handles the show details button
    setShowDetails(prevShow => !prevShow);

    if (!mealDetails && !showDetails) {
      fetchMealDetails(meal.idMeal);
    }
  };

  const handleFavoriteClick = () => { //Handles the clicking of the favorite button
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (!currentFavorites.includes(meal.idMeal)) {
      localStorage.setItem('favorites', JSON.stringify([...currentFavorites, meal.idMeal]));
      setAlertMessage('Recipe added to favorites!');
      setShowAlert(true);
    } else {
      setAlertMessage('This recipe is already in your favorites!');
      setShowAlert(true);
    }
  };

  const handleDeleteClick = () => { //Handles the deletion of a recipe from favorite list
    const currentFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    const updatedFavorites = currentFavorites.filter(id => id !== meal.idMeal);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    if (onDelete) onDelete(meal.idMeal);
    setAlertVariant('danger');
    setAlertMessage('Recipe removed from favorites!');
    setShowAlert(true);
  };

  return ( //Renders recipe cards. Differentiates in what happens if the user is interacting with an API recipe or a user created recipe.
    <Card style={{ width: '26rem' }} className={isFavoritePage ? 'favorite-recipe-card' : ''}>
      <Card.Img variant="top" src={meal.strMealThumb} />
      <Card.Body>
        <Card.Title>{meal.strMeal}</Card.Title>
        <Card.Text>{meal.strCategory}</Card.Text>
        <Button variant="primary" onClick={handleButtonClick}>
          {showDetails ? 'Hide Details' : 'View Details'}
        </Button>
        {
          isLoading ? <p>Loading...</p> :
          error ? <p>{error}</p> :
          showDetails && mealDetails && (
            <div>
              <IngredientsList meal={mealDetails} />
              <Instructions instructions={mealDetails.strInstructions} />
            </div>
          )
        }
        {isFavoritePage ? (
          <Button variant="danger" onClick={handleDeleteClick}>
            Delete
          </Button>
        ) : (
          <Button variant="primary" onClick={handleFavoriteClick}>
            Favorite
          </Button>
        )}
      </Card.Body>
      {showAlert && <AlertNotification variant={alertVariant} message={alertMessage} />}
    </Card>
  );
}

export default RecipeCard;

