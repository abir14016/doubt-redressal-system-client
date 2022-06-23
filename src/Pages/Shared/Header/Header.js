import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';

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
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="home">Home</CustomLink>
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="raisedoubt">Raise Doubt</CustomLink>
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="solvedoubts">Solve Doubts</CustomLink>
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