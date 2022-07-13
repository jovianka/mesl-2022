import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import googleLogo from '../images/google-logo.webp';
import google from '../images/google.png';

function Sponsors() {
  return ( 
    <div className="Sponsors py-5 my-5">
      <h1 className="text-center pb-3">Sponsors</h1>
      <Container>
        <Row className="g-3 row-cols-2 row-cols-md-4" data-aos="fade-up">
          <Col className="justify-content-center sponsors-container">
            <a href="/registrasi" className="sponsors-link">
              <img src={google} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
          <Col className="justify-content-center sponsors-container">
            <a href="/registrasi" className="sponsors-link">
              <img src={googleLogo} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
          <Col className="justify-content-center sponsors-container">
            <a href="/registrasi" className="sponsors-link">
              <img src={google} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
          <Col className="justify-content-center sponsors-container">
            <a href="/registrasi" className="sponsors-link">
              <img src={googleLogo} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
   );
}

export default Sponsors;