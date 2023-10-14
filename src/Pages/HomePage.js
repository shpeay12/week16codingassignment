import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

function HomePage() { //Creates the home page. Renders a h1 and p element, stylized with React Bootstrap.
    return (
        <Container>
            <Container className="mt-5 p-5 bg-info border rounded text-center">
                <h1>Welcome to the Recipe Finder!</h1>
                <h3>Discover delicious recipes using our search page, and be sure to save your favorites!</h3>
            </Container>
            <Row className="justify-content-center mt-4">
                <Col xs={12} md={12} className="text-center"> 
                    <Image 
                        src="https://static.vecteezy.com/system/resources/thumbnails/011/717/970/small/let-s-eat-handwritten-inscription-in-a-modern-style-with-a-picture-of-a-pot-of-soup-vector.jpg" 
                        alt="Let's Eat!"
                        fluid
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default HomePage;
