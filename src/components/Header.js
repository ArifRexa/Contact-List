import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">CONTACTS</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={Link} style={{color:"white"}} to="/"><i className="fas fa-home"></i> HOME</Nav.Link>
                        <Nav.Link as={Link} style={{color:"white"}} to="/addcontact"><i className="fas fa-address-book"></i> ADD</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;