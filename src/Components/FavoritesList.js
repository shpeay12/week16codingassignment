import React from 'react'; //Imports dependencies
import RecipeCard from './RecipeCard';
import { Container, Row, Col } from 'react-bootstrap';

function FavoritesList({ favorites, onRemoveFavorite }) { //Creates a favorite list with react bootstrap sytlization.
    if (favorites.length === 0) {
        return <p>You have no favorite recipes. Add some!</p>;
    }

    const recipesPerRow = 3; // Number of recipes to display per row

    return ( //Renders favorite list.
        <Container>
            {favorites.map((favorite, index) => (
                index % recipesPerRow === 0 && (
                    <Row key={index}>
                        {favorites.slice(index, index + recipesPerRow).map((favorite) => (
                            <Col key={favorite.idMeal} md={4} className="mb-3">
                                <RecipeCard meal={favorite} isFavoritePage={true} onDelete={onRemoveFavorite} />
                            </Col>
                        ))}
                    </Row>
                )
            ))}
        </Container>
    );
}

export default FavoritesList;
