import React, { useState, useEffect } from 'react'; //Imports state and dependencies
import '../CSS/AddRecipeForm.css';

function AddARecipe({ isEditing, addRecipe, recipes, setRecipes, editingRecipe }) { //Creates component to add a recipe.
  const [recipe, setRecipe] = useState({ //useState hook used to create three properties of state.
    name: '',
    ingredients: '',
    instructions: '',
  });

  const handleChange = (e) => { //Handles input changes.
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => { //Handles what happens when submitted in either the adding or edit of recipe.
    e.preventDefault();
    if (recipes.some((r) => r.name === recipe.name)) {
      updateRecipe(recipe);
    } else {
      addRecipe(recipe);
    }
    setRecipe({
      name: '',
      ingredients: '',
      instructions: '',
    });
  };

  useEffect(() => {
    if (editingRecipe) {
      setRecipe(editingRecipe);
    }
  }, [editingRecipe]);

  const updateRecipe = (updatedRecipe) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe.name === updatedRecipe.name ? updatedRecipe : recipe
      )
    );
  };

  return ( //Returns stylized form.
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="recipeName">
            Recipe Name
          </label>
          <input
            className="form-input"
            type="text"
            id="recipeName"
            name="name"
            placeholder="Enter recipe name"
            value={recipe.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="ingredients">
            Ingredients
          </label>
          <textarea
            className="form-input"
            id="ingredients"
            name="ingredients"
            placeholder="Enter ingredients (separated by commas)"
            rows="4"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="instructions">
            Instructions
          </label>
          <textarea
            className="form-input"
            id="instructions"
            name="instructions"
            placeholder="Enter cooking instructions"
            rows="6"
            value={recipe.instructions}
            onChange={handleChange}
            required
          />
        </div>

        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddARecipe;
