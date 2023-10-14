import React from 'react'; //Imports dependencies
import UserRecipes from '../Components/UserRecipes';
import { Container, Row, Col } from 'react-bootstrap';

function UserRecipesPage() { //Sets up page to view user created recipes, edit them and delete them. Stylized with React Bootstrap.
    return (
        <Container className="text-center mt-5">
            <Row>
                <Col>
                    <h1>Manage Your Recipes!</h1>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <UserRecipes />
                </Col>
            </Row>
        </Container>
    );
}

export default UserRecipesPage;

