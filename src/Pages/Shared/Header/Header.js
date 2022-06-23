import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant="light">
            <Container>
                <Navbar.Brand as={Link} to="home">
                    <img src={logo} height="50" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link className='fw-bold' as={Link} to="home">Home</Nav.Link>
                        <Nav.Link className='fw-bold' as={Link} to="raisedoubt">Raise Doubt</Nav.Link>
                        <Nav.Link className='fw-bold' as={Link} to="solvedoubts">Solve Doubts</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link eventKey={2} href="#memes">
                            <button className='btn btn-primary'>Login</button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;