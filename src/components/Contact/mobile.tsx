import { Col, Container, Row } from "react-bootstrap";
import { BsFillGeoAltFill } from "react-icons/bs";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const ContactComponentMobile = () => {
  return (
    <>
      <Container className="mt-3 py-3 bg-light" id="contact">
        <div className="jumbotron">
          <h1 className="display-6">Sorria com confiança! 😁✨</h1>
          <p className="lead fs-6">
            Se você deseja um sorriso mais saudável e bonito, estou aqui para
            ajudar! Agende uma consulta e descubra como podemos cuidar da sua
            saúde bucal com carinho e profissionalismo. Entre em contato e
            marque seu atendimento! 📲💙
          </p>
          <Row>
            <Col className="d-flex gap-2">
              <a
                className="btn btn-secondary btn-lg"
                href="https://www.instagram.com/dra.gabrielacostas/"
                target="_blank"
                role="button"
              >
                <FaInstagram size={30} />
              </a>
              <a
                className="btn btn-secondary btn-lg"
                href="https://wa.me/558188632050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20seu%20serviço!"
                target="_blank"
              >
                <FaWhatsapp size={30} /> (81) 8863-2050
              </a>
              <a
                className="btn btn-secondary btn-lg"
                href="https://www.google.com/maps?q=Boa+Viagem,+Pernambuco"
                target="_blank"
                role="button"
              >
                <BsFillGeoAltFill size={30} />
              </a>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default ContactComponentMobile;
