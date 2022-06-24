import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import MESLIcon from '../images/mesl-logo.webp';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavigationBar() {

  const [navLinkState, setNavLinkState] = useState("");

  useEffect(() => {
    setNavLinkState(`${({ isActive }: {isActive: any}) => isActive ? "active" : ""}`);
  }, [navLinkState]);
  

  return (
    <Navbar bg="dark" variant="dark" expand="sm" className="sticky-top border-bottom border-secondary">
      <Container>
        <Navbar.Brand>
          <img src={MESLIcon} alt="MESL Logo" width="48" height="48" className="me-3" />
          <Navbar.Text className="text-light fw-bold">MESL 2022</Navbar.Text>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link as={ NavLink } to="/" className={ navLinkState }>Home</Nav.Link>
            <Nav.Link as={ NavLink } to="/tournaments" className={ navLinkState }>Tournaments</Nav.Link>
            <Nav.Link as={ NavLink } to="/registration" className={ navLinkState }>
              <Button variant="accent">
                Registration
              </Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}