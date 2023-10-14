import React, { useState } from "react";//Imports dependencies
import RecipeCard from "./RecipeCard";
import { Container, Row, Col, Card } from 'react-bootstrap';

function RecipeList({ meals }) { //Renders RecipeList component to filter meals by category in the recipe cards.
    const [searchQuery] = useState("");

    const filteredMeals = meals.filter(meal => //filters recipes
        meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return ( //Renders content
        <Container className="text-center mt-5">
            <div className="recipe-list">
                {filteredMeals.map(meal => (
                    <Card key={meal.idMeal} border="secondary" rounded className="mb-3 bg-transparent">
                        <RecipeCard meal={meal} />
                    </Card>
                ))}
            </div>
        </Container>
    );
}

export default RecipeList;

