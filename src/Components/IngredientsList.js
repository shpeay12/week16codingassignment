import React from "react";

function IngredientsList({ meal }) { //Creates ingredients list component.

    const ingredientsWithMeasurements = [];

    for (let i = 1; i <= 20; i++) { //Processes ingredients list from API
        const ingredient = meal[`strIngredient${i}`];
        const measurement = meal[`strMeasure${i}`];

        if (ingredient && ingredient !== "") {
            ingredientsWithMeasurements.push({
                ingredient,
                measurement
            });
        }
    }

    
    IngredientsList.defaultProps = { //Sets default prop.
        meal: {}
    }

    return ( //Renders component
        <div className="recipe-ingredients">
            <h5>Ingredients:</h5>
            <ul>
                {ingredientsWithMeasurements.map((item, index) => (
                    <li key={index}>
                        {item.ingredient} - {item.measurement}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default IngredientsList;
