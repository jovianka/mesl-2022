import { AnimationOnScroll } from 'react-animation-on-scroll';

import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import { Link } from 'react-router-dom';

import { useState } from 'react';

import mlbbLogo from '../images/mlbb-logo.webp';
import valorantLogo from '../images/valorant-logo.svg';
import pubgmLogo from '../images/pubgm-logo.webp';


export default function Home() {

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="Home">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181f8c9bfd3%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181f8c9bfd3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.4833297729492%22%20y%3D%22219.5%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181f8c9bfd3%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181f8c9bfd3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.4833297729492%22%20y%3D%22219.5%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_181f8c9bfd3%20text%20%7B%20fill%3A%23ffffff%3Bfont-weight%3Anormal%3Bfont-family%3Avar(--bs-font-sans-serif)%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_181f8c9bfd3%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%2320232a%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22276.4833297729492%22%20y%3D%22219.5%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      <Container className="py-3 overflow-hidden">
        <Row className="justify-content-center my-5">
          <h1 className="w-auto text-center">Marsudirini E-sports League 2022</h1>
          <iframe className="trailerIframe my-4" src="https://www.youtube.com/embed/tcrNsIaQkb4" title="The Boys - Final Trailer | Prime Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <p>Marsudirini E-Sport League 2022: ARCADE kembali menghadirkan perlombaan e-sport bagi para pelajar pada jenjang SMP dan SMA untuk menyalurkan bakatnya dengan dilandasi semangat berkompetisi. Perlombaan terbagi menjadi 3 cabang lomba yakni Mobile Legends: Bang Bang, PUBG Mobile, dan Valorant serta dilaksanakan secara daring/online dan luring/offline di area Gedung Serbaguna Marsudirini Bekasi. </p>
          <p>Serangkaian acara Marsudirini E-Sport League 2022: ARCADE akan dimulai pada 17 Oktober 2022 dan berakhir pada 22 Oktober 2022. Tema kegiatan yang kami angkat yakni berjudul “ARCADE”. Arcade adalah area atau wadah di mana ada banyak permainan elektronik atau permainan yang dioperasikan dengan koin untuk umum. Dengan demikian, ada harapan bahwa Marsudirini E-Sport League 2022 menjadi wadah bagi siswa-siswi yang memiliki ketertarikan di bidang e-sport dalam mengeluarkan bakatnya.</p>
          <AnimationOnScroll initiallyVisible={true} animateIn="animate__tada" className="w-100 text-center">
            <Link to="/registrasi" className="w-auto">
              <Button variant="accent" size="lg" className="w-auto">Daftar Sekarang!</Button>
            </Link>
          </AnimationOnScroll>
        </Row>
        <Row className="gy-3 justify-content-center align-items-center">
          <Col md="4">
            <Card className="align-items-center bg-dark">
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__pulse" className="w-100 text-center">
                <Card.Img src={valorantLogo} alt="Valorant Logo" className="w-75" />
                <Card.Title className="text-center">Prize Pool: $40.018.195</Card.Title>
              </AnimationOnScroll>
            </Card>
            <hr />
          </Col>
          <Col md="4">
            <Card className="align-items-center bg-dark">
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__pulse" className="w-100 text-center">
                <Card.Img src={mlbbLogo} alt="MLBB Logo" className="w-75" />
                <Card.Title className="text-center">Prize Pool: $40.018.195</Card.Title>
              </AnimationOnScroll>
            </Card>
            <hr />
          </Col>
          <Col md="4">
            <Card className="align-items-center bg-dark">
              <AnimationOnScroll initiallyVisible={true} animateIn="animate__pulse" className="w-100 text-center">
                <Card.Img src={pubgmLogo} alt="PUBGM Logo" className="w-75" />
                <Card.Title className="text-center">Prize Pool: $40.018.195</Card.Title>
              </AnimationOnScroll>
            </Card>
            <hr />
          </Col>
        </Row>
      </Container>

    </div> 
  )
}