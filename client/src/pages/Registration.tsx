import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import MLBBLogo from '../images/mlbb-logo.webp';
import PUBGMLogo from '../images/pubg-logo.webp';
import ValorantLogo from '../images/valorant-logo.svg';

export default function Registration() {

  const [collapseAturanPendaftaran, setOpen] = useState(true);

  return (
    <div className="Registration">
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm="10">
            <Card body border="secondary" bg="dark">
              <Button className="w-100" onClick={() => setOpen(!collapseAturanPendaftaran)}>
                <Card.Header className="d-flex justify-content-center align-items-center">
                  <h1 className="text-center">Aturan Pendaftaran</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down ms-2" viewBox="0 0 16 16">
                      <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                    </svg>
                </Card.Header>
              </Button>
              <Collapse in={collapseAturanPendaftaran}>
                <div id="collapseAturanPendaftaran">
                  <Card.Body className="border-top">
                    <ul>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                    </ul>
                  </Card.Body>
                </div>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <hr />

        <h1 className="text-center pt-5">Games</h1>
        <Row className="row-cols-3 gy-3 justify-content-center py-5">
          <Col sm="2">
            <Button variant="outline-accent bg-body w-100" as="a" href="#daftarMLBB">
              <img src={MLBBLogo} alt="" className="w-100"/>
            </Button>
          </Col>
          <Col sm="2">
            <Button variant="outline-accent bg-body w-100" as="a" href="#daftarValorant">
              <img src={ValorantLogo} alt="" />
            </Button>
          </Col>
          <Col sm="2">
            <Button variant="outline-accent bg-body w-100" as="a" href="#daftarPUBGM">
              <img src={PUBGMLogo} alt="" className="w-100"/>
            </Button>
          </Col>
        </Row>

      </Container>
    </div> 
  )
}