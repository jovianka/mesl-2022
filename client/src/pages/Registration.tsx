import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';
import Modal from 'react-bootstrap/Modal';
import AOS from 'aos';
import Footer from '../components/Footer';

import { useState } from 'react';

import MLBBLogo from '../images/mlbb-logo.webp';
import ValorantLogo from '../images/valorant-logo.svg';
import PUBGMLogo from '../images/pubgm-logo.webp';
import MLBBArt from '../images/mlbb-art.webp';
import ValorantArt from '../images/valorant-art.webp';
import PUBGLogo from '../images/pubg-logo.webp';


export default function Registration() {

  const [collapseAturanPendaftaran, setOpenCollapseAturanPendaftaran] = useState(true);

  //Modal Pendaftaran
  const [showValorantForm, setShowValorantForm] = useState(false);
  const [showMLBBForm, setShowMLBBForm] = useState(false);
  const [showPUBGMForm, setShowPUBGMForm] = useState(false);


  return (
    <div className="Registration">
      <Container>

        {/* ATURAN PENDAFTARAN */}
        <Row className="justify-content-center py-5">
          <Col sm="10">
            <Card body border="secondary" bg="dark">
              <Button className="w-100" onClick={() => {
                setOpenCollapseAturanPendaftaran(!collapseAturanPendaftaran);
                setTimeout(() => AOS.refresh(), 1000);
              }
            }>
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
                    <ol>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                    </ol>
                  </Card.Body>
                </div>
              </Collapse>
            </Card>
          </Col>
        </Row>

        <hr />

        {/* GAME BUTTONS */}
        <h1 className="text-center pt-5">Games</h1>
        <Row className="row-cols-2 row-cols-sm-3 gy-3 justify-content-center pt-4 pb-5" data-aos="fade-up">
          <Col lg="2">
            <Button variant="outline-accent bg-body w-100" as="a" href="#daftarValorant">
              <img src={ValorantLogo} alt="Valorant Logo" className="w-100" />
            </Button>
          </Col>
          <Col lg="2">
            <Button variant="outline-accent bg-body w-100" as="a" href="#daftarMLBB">
              <img src={MLBBLogo} alt="MLBB Logo" className="w-100"/>
            </Button>
          </Col>
          <Col lg="2">
            <Button variant="outline-accent bg-body w-100 h-100" as="a" href="#daftarPUBGM">
              <img src={PUBGMLogo} alt="PUBGM Logo" className="w-100 h-100"/>
            </Button>
          </Col>
        </Row>
        
        {/* FORM BUTTONS */}
        <div className="formulir-pendaftaran">
          
          <Row id="daftarValorant" className="py-5 justify-content-center align-items-center">
            <Col md="6" className="d-flex justify-content-center">
              <img src={ValorantArt} alt="Valorant artwork" data-aos="fade" className="mw-100" />
            </Col>
            <Col md="6">
              <h1>Valorant</h1>
              <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
              <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp120.000</p>
              <Button variant="accent" size="lg" onClick={() => setShowValorantForm(true)}>Daftar</Button>
            </Col>
          </Row>

          <hr />

          <Row id="daftarMLBB" className="py-5 justify-content-center align-items-center">
            <Col md="6" className="">
              <img src={MLBBArt} alt="MLBB artwork" data-aos="fade" className="mw-100" />
            </Col>
            <Col md="6">
              <h1>Mobile Legends: Bang Bang</h1>
              <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
              <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp70.000</p>
              <Button variant="accent" size="lg" onClick={() => setShowMLBBForm(true)}>Daftar</Button>
            </Col>
          </Row>

          <hr />

          <Row id="daftarPUBGM" className="py-5 justify-content-center align-items-center">
            <Col md="6" className="">
              <img src={PUBGLogo} alt="PUBG artwork" data-aos="fade" className="mw-100"/>
            </Col>
            <Col md="6">
              <h1>PUBG Mobile</h1>
              <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
              <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp70.000</p>
              <Button variant="accent" size="lg" onClick={() => setShowPUBGMForm(true)}>Daftar</Button>
            </Col>
          </Row>
        </div>

        {/* FORM MODALS */}
        {/* VALORANT */}
      <Modal
        fullscreen={true}
        show={showValorantForm}
        onHide={() => setShowValorantForm(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="border-bottom border-dark">
          <h1 className="text-dark">Formulir Valorant</h1>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe title="ValorantForm" src="https://docs.google.com/forms/d/e/1FAIpQLScskNyExpsMkhymOYGViRSRfsIXROp4kzrlrNcvqfO3Jhto4A/viewform?embedded=true" width="100%" height="100%"></iframe>
        </Modal.Body>
      </Modal>

      <Modal
        fullscreen={true}
        show={showMLBBForm}
        onHide={() => setShowMLBBForm(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="border-bottom border-dark">
          <h1 className="text-dark">Formulir MLBB</h1>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe title="MLBBForm" src="https://docs.google.com/forms/d/e/1FAIpQLScskNyExpsMkhymOYGViRSRfsIXROp4kzrlrNcvqfO3Jhto4A/viewform?embedded=true" width="100%" height="100%"></iframe>
        </Modal.Body>
      </Modal>

      <Modal
        fullscreen={true}
        show={showPUBGMForm}
        onHide={() => setShowPUBGMForm(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton className="border-bottom border-dark">
          <h1 className="text-dark">Formulir PUBGM</h1>
        </Modal.Header>
        <Modal.Body className="text-center">
          <iframe title="PUBGMForm" src="https://docs.google.com/forms/d/e/1FAIpQLScskNyExpsMkhymOYGViRSRfsIXROp4kzrlrNcvqfO3Jhto4A/viewform?embedded=true" width="100%" height="100%"></iframe>
        </Modal.Body>
      </Modal>

      </Container>

      <Footer />
    </div> 
  )
}