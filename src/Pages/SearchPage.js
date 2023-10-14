import React, { useState, useEffect } from 'react'; //Sets up states
import RecipeList from '../Components/RecipeList';
import { Row, Col, Button, FormCheck } from 'react-bootstrap';

function SearchPage() { //Search page used to find recipes.
    const [categories, setCategories] = useState([]); //Use useState hook to manage three states
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredMeals, setFilteredMeals] = useState([]);

    useEffect(() => { //Fetches recipes by categories from api.
        async function fetchCategories() {
            const response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
            const data = await response.json();
            setCategories(data.categories);
        }
    
        fetchCategories();
    }, []);
    
    
    const handleCategoryChange = (e) => { //Handles selection of categories
        const { value, checked } = e.target;

        setSelectedCategories(prevCategories => {
            if(checked) {
                return [...prevCategories, value];
            } else {
                return prevCategories.filter(category => category !== value);
            }
        });
    };

    const handleSubmit = async () => { //Handles clicking of submit button after categories are selected.
        const mealFetchPromises = selectedCategories.map(category => 
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(response => response.json())
        );
    
        const allMealsData = await Promise.all(mealFetchPromises);
        const allMeals = allMealsData.flatMap(data => data.meals);
    
        setFilteredMeals(allMeals);
    };
    
    
    return ( //Renders the content with rows and columns of the different content, including the headings, categories, and the recipe cards.
        <div>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h3>Check the meal types below and click "Filter Recipes."</h3>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col md="auto">
                    <p>Create a list of favorites by clicking "Favorite" on your meal. Visit "Find A Recipe" to see your list!</p>
                </Col>
            </Row>

            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <div className="category-filters">
                        {categories.map(category => (
                            <FormCheck
                                key={category.strCategory}
                                type="checkbox"
                                id={`category-${category.strCategory}`}
                                label={category.strCategory}
                                value={category.strCategory}
                                onChange={handleCategoryChange}
                                checked={selectedCategories.includes(category.strCategory)}
                            />
                        ))}
                    </div>
                </Col>
            </Row>

            <Row className="justify-content-md-center mt-3">
                <Col md="auto">
                    <Button onClick={handleSubmit}>Filter Recipes</Button>
                </Col>
            </Row>

            <Row className="mt-12">
                <Col>
                    <RecipeList meals={filteredMeals} />
                </Col>
            </Row>
    </div>
    );
}

export default SearchPage;
