import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => (
    <div>
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    Doctors Portal
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} className="mr-4" to="/">
                            Home
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="/login">
                            Login
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4" to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4 text-white" to="/dashboard">
                            Admin
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4 text-white" to="#">
                            Blogs
                        </Nav.Link>
                        <Nav.Link as={Link} className="mr-4 text-white" to="#">
                            Contact Us
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
);

export default NavBar;
