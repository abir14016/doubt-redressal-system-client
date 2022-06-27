import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, OverlayTrigger, Popover } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import CustomLink from '../CustomLink/CustomLink';
import userImage from '../../../images/utilities/user-logo.png';
import dashboardImage from '../../../images/utilities/dashboard-logo.jpg';
import logOutImage from '../../../images/utilities/logout-logo.png';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const handleLogOut = () => {
        signOut(auth);
    }

    const userElement = {
        image: user?.photoURL,
        name: user?.displayName,
        email: user?.email
    }

    const popover = (
        <Popover className='border-border-2' style={{ width: 220 }} id="popover-basic">
            <div className='m-1 border border-2'>
                <Popover.Header className='text-center' as="h3">{userElement.name}</Popover.Header>
                <Popover.Body>
                    <div className='text-center'>
                        <img style={{ width: 60, height: 60 }} className='rounded-circle' src={userElement.image} alt="" />
                        <p className='text-secondary text-center'>{userElement.email}</p>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img style={{ width: 20, height: 20 }} src={logOutImage} alt="" />
                        <h6 className='text-muted ms-2' style={{ cursor: "pointer" }} onClick={handleLogOut}>log out</h6>
                    </div>
                    <div className='d-flex justify-content-center align-items-center'>
                        <img style={{ width: 20, height: 20 }} src={dashboardImage} alt="" />
                        <h6 className='text-muted ms-2' style={{ cursor: "pointer" }} >dashboard</h6>
                    </div>
                </Popover.Body>
            </div>
        </Popover>
    );
    return (
        <Navbar collapseOnSelect expand="lg" bg='light' variant="light" sticky='top'>
            <Container>
                <Navbar.Brand as={Link} to="home">
                    <img src={logo} height="50" alt="logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="home">Home</CustomLink>
                        <span className='nav-link fw-bold'>|</span>
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="raisedoubt">Raise Doubt</CustomLink>
                        <span className='nav-link fw-bold'>|</span>
                        <CustomLink className='fw-bold text-dark nav-link' as={Link} to="solvedoubts">Solve Doubts</CustomLink>
                    </Nav>
                    <Nav>
                        {
                            !user ?
                                <Link className='nav-link' to="login">
                                    <button className='btn btn-primary'>Login</button>
                                </Link> : <Link
                                    to="#"
                                    onClick={handleLogOut}
                                    className='nav-link'>
                                    <button className='btn btn-primary'>Logout</button>
                                </Link>
                        }

                        {
                            user && <div className='btn btn-link'>
                                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                                    {
                                        user?.photoURL ? <img className='profile-picture' src={user.photoURL} alt="" /> : <img className='profile-picture' src={userImage} alt="" />
                                    }
                                </OverlayTrigger>
                            </div>
                        }


                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;