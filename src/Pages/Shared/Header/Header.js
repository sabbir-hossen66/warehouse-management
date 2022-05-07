import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import '../Header/Header.css'



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


                        </Nav>
                        <Nav>
                            {user && <>
                                <Nav.Link as={Link} to="addcategory">Add</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage</Nav.Link>
                                <Nav.Link as={Link} to="myitem">My-item</Nav.Link>
                            </>

                            }
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