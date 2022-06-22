import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function NavigationBar() {

  const [navLinkState, setNavLinkState] = useState("");

  useEffect(() => {
    setNavLinkState(`${({ isActive }: {isActive: any}) => isActive ? "active" : ""}`);
  }, [navLinkState])
  

  return (
    <Navbar bg="dark" variant="dark" expand="lg" >
      <Container>
        <Navbar.Brand href={process.env.PUBLIC_URL + "/"}>
          <img src="mesl-icon.png" alt="MESL Logo" width={48} height={48} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={ NavLink } to="/registration" className={ navLinkState }>Registration</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}