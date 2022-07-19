import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

import { useState } from 'react';

import mlbbLogo from '../images/mlbb-logo.webp';
import valorantLogo from '../images/valorant-logo.svg';
import pubgmLogo from '../images/pubgm-logo.webp';

export default function Info() {

  const [collapseAturanValorant, setOpenCollapseAturanValorant] = useState(true);
  const [collapseAturanMLBB, setOpenCollapseAturanMLBB] = useState(true);
  const [collapseAturanPUBGM, setOpenCollapseAturanPUBGM] = useState(true);

  return (
    <div className="Info">
      <Container>
        <div id="aturanValorant">
          <Row className="justify-content-center my-5">
            <Col sm="10">
              <Card bg="secondary" className="p-3">
                <Button variant="secondary" className="w-100" onClick={() => setOpenCollapseAturanValorant(!collapseAturanValorant)}>
                  <Card.Header className="border-0 d-flex justify-content-center align-items-center">
                    <h2 className="text-center bg-transparent">Peraturan Valorant</h2>
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
        <hr/>
        <div id="aturanMLBB">
          <Row className="justify-content-center my-5">
            <Col sm="10">
              <Card bg="secondary" className="p-3">
                <Button variant="secondary" className="w-100" onClick={() => setOpenCollapseAturanMLBB(!collapseAturanMLBB)}>
                  <Card.Header className="border-0 d-flex justify-content-center align-items-center">
                    <h2 className="text-center bg-transparent">Peraturan MLBB</h2>
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

        <hr />

        <div id="aturanPUBGM">
          <Row className="justify-content-center my-5">
            <Col sm="10">
              <Card bg="secondary" className="p-3">
                <Button variant="secondary" className="w-100" onClick={() => setOpenCollapseAturanPUBGM(!collapseAturanPUBGM)}>
                  <Card.Header className="border-0 d-flex justify-content-center align-items-center">
                    <h2 className="text-center bg-transparent">Peraturan PUBGM</h2>
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

        <hr />
        
      </Container>
    </div> 
  )
}