import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Collapse from 'react-bootstrap/Collapse';

export default function Registration() {
  return (
    <div className="Registration">
      <Container>
        <Row className="justify-content-center py-5">
          <Col sm="10">
            <Card body border="secondary" bg="dark" text="light">
                <Card.Header className="border-bottom d-flex justify-content-center align-items-center">
                    <h1 className="opacity-82">Aturan Pendaftaran</h1>
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" className="bi bi-caret-down ms-2" viewBox="0 0 16 16">
                        <path d="M3.204 5h9.592L8 10.481 3.204 5zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659z"/>
                      </svg>
                </Card.Header>
              <Card.Body className="opacity-60">
                <ul>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                  <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error asperiores animi qui id beatae possimus architecto, odio sapiente, quasi tenetur consectetur alias illo. Non voluptates corporis pariatur, odio odit placeat.</li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <hr />

        <Row>

        </Row>

      </Container>
    </div> 
  )
}