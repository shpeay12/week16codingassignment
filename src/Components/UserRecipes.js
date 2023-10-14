import React, { useState, useContext } from 'react'; //Imports dependencies
import { RecipesContext } from '../Components/RecipesContext';
import AddARecipe from './AddARecipe';
import '../CSS/UserRecipeCard.css';


function UserRecipes() { //Renders a list of recipes created by the user
    const { recipes, setRecipes } = useContext(RecipesContext); //State management
    const [editingRecipe, setEditingRecipe] = useState(null);

    const addRecipe = (recipe) => { //Handles adding a recipe button
        setRecipes([...recipes, recipe]);
    }
    
    const editRecipe = (recipeName) => { //Handles editing a recipe button
        const recipe = recipes.find(r => r.name === recipeName);
        setEditingRecipe(recipe);
    }
    
    const finishEditing = () => {  //Handles finishing editing button button
        setEditingRecipe(null);
    }

    const deleteRecipe = (recipeName) => { //Handles deleting a recipe button
        setRecipes(recipes.filter(recipe => recipe.name !== recipeName));
    }

    return ( //Renders the user recipes and the buttons to interact with them.
        <div>
            <h5>Edit or delete a recipe!</h5>
            
            {editingRecipe && (
                    <AddARecipe
                    addRecipe={addRecipe} 
                    recipes={recipes}
                    setRecipes={setRecipes}
                    editingRecipe={editingRecipe}
                    isEditing={true} 
                />
            )}
            {editingRecipe && (
                <button className="finish-editing-button" onClick={finishEditing}>Finish Editing</button>
            )}

            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                <div key={index} className="recipe-card">
                    <img src="https://i.etsystatic.com/10591113/r/il/e614eb/720407533/il_fullxfull.720407533_cfek.jpg" alt="Recipe" />
                    <h3>{recipe.name}</h3>
                    <p>{recipe.ingredients}</p>
                    <p>{recipe.instructions}</p>
                    <button className="edit-button" onClick={() => editRecipe(recipe.name)}>Edit</button>
                    <button className="delete-button" onClick={() => deleteRecipe(recipe.name)}>Delete</button>
                </div>
                ))}
            </div>
            
        </div>
    );
}

export default UserRecipes;
