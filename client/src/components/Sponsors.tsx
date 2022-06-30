import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import googleLogo from '../images/google-logo.webp';
import google from '../images/google.png';

function Sponsors() {
  return ( 
    <div className="Sponsors py-5">
      <h1 className="text-center pb-3">Sponsors</h1>
      <Container>
        <Row className="gy-4 row-cols-2 row-cols-md-3" data-aos="fade-up">
          <Col md="4" className="justify-content-center sponsors-container">
            <a href="#daftarValorant" className="sponsors-link">
              <img src={google} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
          <Col md="4" className="justify-content-center sponsors-container">
            <a href="#daftarValorant" className="sponsors-link">
              <img src={googleLogo} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
          <Col md="4" className="justify-content-center sponsors-container">
            <a href="#daftarValorant" className="sponsors-link">
              <img src={google} alt="Google Logo" className="sponsors-image" />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
   );
}

export default Sponsors;