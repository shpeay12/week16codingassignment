import React, { createContext, useState } from 'react'; //Imports dependencies

//Creates a context for recipes to be used globally.

export const RecipesContext = createContext(); 

export const RecipesProvider = ({ children }) => { 
    const [recipes, setRecipes] = useState([]);

    return ( 
        <RecipesContext.Provider value={{ recipes, setRecipes }}>
            {children}
        </RecipesContext.Provider>
    );
};

export default RecipesProvider;