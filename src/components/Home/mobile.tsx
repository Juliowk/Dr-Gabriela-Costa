import { Container, Image, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";

const HomeComponentMobile = () => {
  return (
    <Container className="mt-4">
      <Row>
        <div className="jumbotron">
          <h1 className="display-6">Quem é Dr Gabrila Costa?</h1>
          <p className="fs-6 lead mt-3">
            A Dra. Gabriela Costa é uma profissional dedicada à saúde bucal,
            oferecendo atendimento humanizado e de qualidade. Com experiência em
            técnicas modernas, busca as melhores soluções para garantir sorrisos
            saudáveis e harmoniosos. Agende sua consulta e transforme sua
            qualidade de vida! 🦷✨
          </p>
          <hr className="my-4" />
        </div>
      </Row>
      <Row>
        <Image src="dentista.jpg" rounded style={{ width: "400px" }} />
      </Row>
      <Row className="mt-3">
        <p className="lead text-center">
          <a
            className="btn btn-lg"
            href="https://www.instagram.com/dra.gabrielacostas/"
            target="_blank"
            role="button"
          >
            <FaInstagram size={30} /> @dra.gabrielacostas
          </a>
        </p>
      </Row>
    </Container>
  );
};

export default HomeComponentMobile;
