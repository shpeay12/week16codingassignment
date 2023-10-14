import React from 'react'; //Imports dependencies
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

function NavigationBar() { //Component to create Navigation Bar at top of page, stylized. Each Link container links to each page of the website.
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand>My Recipe Book</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <LinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/search">
                        <Nav.Link>Find A Recipe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/favorites">
                        <Nav.Link>Favorites</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/addrecipe">
                        <Nav.Link>Add A Recipe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/user-recipes">
                        <Nav.Link>Users Recipes</Nav.Link>
                    </LinkContainer>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;
