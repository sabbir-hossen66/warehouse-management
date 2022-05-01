import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import '../Header/Header.css'


const Header = () => {
    return (
        <>
            <Navbar bg="secondary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <span style={{ color: "#aaebf2", fontWeight: "bolder", fontSize: "larger" }}>Books house</span>
                    </Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#blog">Blog</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
};

export default Header;