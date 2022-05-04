import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Header/Header.css'
import myphoto from '../../../images/gg phto.jpg'


const Header = () => {
    const [user] = useAuthState(auth);
    console.log(user);

    const handleSignOut = () => {
        signOut(auth);
    }
    return (

        <>

            <Navbar collapseOnSelect expand="lg" sticky='top' bg="secondary" variant="dark">

                <Container>

                    <Navbar.Brand as={Link} to="/">
                        <span style={{ color: "#aaebf2", fontWeight: "bolder", fontSize: "larger" }}>Books house</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home#categories">Categories</Nav.Link>
                            <Nav.Link href="home#writers">Writers</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blog">Blog</Nav.Link>
                            {

                                user ?

                                    <button onClick={handleSignOut} className='btn btn-link text-white text-decoration-none rounded'>
                                        sign out
                                    </button>
                                    :
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;