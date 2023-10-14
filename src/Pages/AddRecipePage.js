import React, { useContext } from 'react'; //Sets up states
import AddARecipe from '../Components/AddARecipe';
import { RecipesContext } from '../Components/RecipesContext';

function AddRecipe() { //Page to add a user created recipe
    const { recipes, setRecipes, editingRecipe } = useContext(RecipesContext); //Uses context to access state managed by RecipesContext

    const addRecipe = (recipe) => {  //Adds recipe to list
        setRecipes([...recipes, recipe]);
    }

    return( //Renders content. Uses AddARecipe component with form.
        <div>
            <h1>Use the form below to add a recipe!</h1>
            <div>
                <AddARecipe 
                    addRecipe={addRecipe}
                    recipes={recipes}
                    setRecipes={setRecipes}
                    editingRecipe={editingRecipe}
                />
            </div>
        </div>
    );
}

export default AddRecipe;
