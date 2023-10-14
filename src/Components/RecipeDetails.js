import React from 'react'; //Imports dependencies
import IngredientsList from './IngredientsList';
import Instructions from './Instructions';

function RecipeDetails({ recipe }) { //Renders component to give the details of the recipe, including picture, name, description, ingredientslist and instructions.
return (
    <div className="recipe-details">
            <div className="recipe-header">
                <img src={recipe.imageURL} alt={recipe.name} className="recipe-image"/>
                <h2 className="recipe-title">{recipe.name}</h2>
                {recipe.description && <p className="recipe-description">{recipe.description}</p>}
            </div>
            
            <IngredientsList ingredients={recipe.ingredients} />
            <Instructions instructions={recipe.instructions} />
        </div>
    );
}

export default RecipeDetails;