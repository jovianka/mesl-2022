import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { useState, useEffect } from 'react';

import mlbbLogo from '../images/mlbb-logo.webp';
import valorantLogo from '../images/valorant-logo.svg';
import pubgmLogo from '../images/pubgm-logo.webp';
import mlbbArt from '../images/mlbb-art.webp';
import valorantArt from '../images/valorant-art.webp';
import pubgLogo from '../images/pubg-logo.webp';


export default function Registrasi() {

  const [collapseAturanPendaftaran, setOpenCollapseAturanPendaftaran] = useState(true);
  const [collapseAturanValorant, setOpenCollapseAturanValorant] = useState(false);
  const [collapseAturanMLBB, setOpenCollapseAturanMLBB] = useState(false);
  const [collapseAturanPUBGM, setOpenCollapseAturanPUBGM] = useState(false);

  return (
    <main className="Registrasi">
      <Container>
        {/* ATURAN PENDAFTARAN */}
        <section className="aturan-pendaftaran my-5 pb-4">
          <Row className="justify-content-center">
            <Col sm="12">
              <Card border="secondary" bg="dark" className="p-3">
                <Button className="w-100" onClick={() => setOpenCollapseAturanPendaftaran(!collapseAturanPendaftaran)}>
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
                        <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                      </ol>
                    </Card.Body>
                  </div>
                </Collapse>
              </Card>
            </Col>
          </Row>
        </section>


        <section className="lomba my-5 pb-4">
          {/* GAME BUTTONS */}
          <h1 className="text-center mb-5">Games</h1>
          <Row className="row-cols-2 row-cols-sm-3 gy-3 justify-content-center">
            <Col lg="3">
              <Button variant="outline-accent rounded-circle" as="a" href="#daftarValorant">
                <img src={valorantLogo} alt="Valorant Logo" className="w-100" />
              </Button>
            </Col>
            <Col lg="3">
              <Button variant="outline-accent rounded-circle" as="a" href="#daftarMLBB">
                <img src={mlbbLogo} alt="MLBB Logo" className="w-100"/>
              </Button>
            </Col>
            <Col lg="3">
              <Button variant="outline-accent rounded-circle" as="a" href="#daftarPUBGM">
                <img src={pubgmLogo} alt="PUBGM Logo" className="w-100"/>
              </Button>
            </Col>
          </Row>


          {/* FORM BUTTONS */}
          <div className="formulir-pendaftaran">
            
            <div id="daftarValorant" className="mt-5">
              <Row className="justify-content-center align-items-center">
                <Col md="6" className="d-flex justify-content-center">
                  <img src={valorantArt} alt="Valorant artwork" className="mw-100" />
                </Col>
                <Col md="6">
                  <h2>Valorant</h2>
                  <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
                  <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp120.000</p>
                  <Button variant="accent" size="lg" as="a" href="">Daftar Lomba Valorant</Button>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Col sm="12">
                  <Card border="secondary" bg="dark" className="p-3">
                    <Button className="w-100" onClick={() => setOpenCollapseAturanValorant(!collapseAturanValorant)}>
                      <Card.Header className="d-flex justify-content-center align-items-center">
                        <h2 className="text-center">Aturan Valorant</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down ms-2" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                          </svg>
                      </Card.Header>
                    </Button>
                    <Collapse in={collapseAturanValorant}>
                      <div id="collapseAturanValorant">
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
            </div>


            <div id="daftarMLBB" className="mt-5">
              <Row className="justify-content-center align-items-center">
                <Col md="6" className="">
                  <img src={mlbbArt} alt="MLBB artwork" className="mw-100" />
                </Col>
                <Col md="6">
                  <h2>Mobile Legends: Bang Bang</h2>
                  <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
                  <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp70.000</p>
                  <Button variant="accent" size="lg" as="a" href="">Daftar Lomba MLBB</Button>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Col sm="12">
                  <Card border="secondary" bg="dark" className="p-3">
                    <Button className="w-100" onClick={() => setOpenCollapseAturanMLBB(!collapseAturanMLBB)}>
                      <Card.Header className="d-flex justify-content-center align-items-center">
                        <h2 className="text-center">Aturan MLBB</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down ms-2" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                          </svg>
                      </Card.Header>
                    </Button>
                    <Collapse in={collapseAturanMLBB}>
                      <div id="collapseAturanMLBB">
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
            </div>


            <div id="daftarPUBGM" className="mt-5">
              <Row className="justify-content-center align-items-center">
                <Col md="6" className="">
                  <img src={pubgLogo} alt="PUBG artwork" className="mw-100"/>
                </Col>
                <Col md="6">
                  <h2>PUBG Mobile</h2>
                  <p>(Match Description)Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente, consequatur! Nesciunt reprehenderit fuga nihil nisi molestias fugit animi recusandae ea.</p>
                  <p className="fs-5 fst-italic">Biaya Pendaftaran: Rp70.000</p>
                  <Button variant="accent" size="lg" as="a" href="">Daftar Lomba PUBG Mobile</Button>
                </Col>
              </Row>
              <Row className="justify-content-center mt-4">
                <Col sm="12">
                  <Card border="secondary" bg="dark" className="p-3">
                    <Button className="w-100" onClick={() => setOpenCollapseAturanPUBGM(!collapseAturanPUBGM)}>
                      <Card.Header className="d-flex justify-content-center align-items-center">
                        <h2 className="text-center">Aturan PUBGM</h2>
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down ms-2" viewBox="0 0 16 16">
                            <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                          </svg>
                      </Card.Header>
                    </Button>
                    <Collapse in={collapseAturanPUBGM}>
                      <div id="collapseAturanPUBGM">
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
            </div>


          </div>
        </section>
      </Container>
    </main> 
  )
}