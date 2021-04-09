import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavBar = () => (
    <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand className="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="mr-4">Home</Nav.Link>
                        <Nav.Link className="mr-4">About</Nav.Link>
                        <Nav.Link className="mr-4">Dental Services</Nav.Link>
                        <Nav.Link className="mr-4 text-white">Reviews</Nav.Link>
                        <Nav.Link className="mr-4 text-white">Blogs</Nav.Link>
                        <Nav.Link className="mr-4 text-white">Contact Us</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

export default NavBar;
