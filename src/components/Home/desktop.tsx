import { Col, Container, Image, Row } from "react-bootstrap";
import { FaInstagram } from "react-icons/fa";
import { HiBars2 } from "react-icons/hi2";

const HomeComponentDesktop = () => {
  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          <Col className="ms-5 p-2 d-flex justify-content-center align-items-center">
            <div className="jumbotron">
              <h1 className="display-4">Quem é Dr Gabrila Costa?</h1>
              <p className="lead">
                A Dra. Gabriela Costa é uma profissional dedicada à saúde bucal,
                proporcionando atendimento humanizado e de qualidade para seus
                pacientes. Com experiência e conhecimento nas mais modernas
                técnicas odontológicas, ela está sempre em busca das melhores
                soluções para garantir sorrisos saudáveis e harmoniosos. Seja
                para cuidados preventivos, tratamentos estéticos ou
                procedimentos mais avançados, a Dra. Gabriela preza pelo
                conforto e bem-estar de cada paciente, oferecendo um atendimento
                personalizado e eficiente. Agende sua consulta e descubra como
                um sorriso saudável pode transformar sua qualidade de vida! 🦷✨
              </p>
              <hr className="my-4" />
              <p>
                Conheça um pouco mais sobre o trabalho dela através de seu
                instagram!
              </p>
              <p className="lead">
                <a
                  className="btn btn-secondary btn-lg"
                  href="https://www.instagram.com/dra.gabrielacostas/"
                  target="_blank"
                  role="button"
                >
                  <FaInstagram size={30} /> @dra.gabrielacostas
                </a>
              </p>
            </div>
          </Col>
          <Col className="d-flex justify-content-center align-items-center">
            <Image
              src="dentista.jpg"
              rounded
              style={{ width: "600px", objectFit: "cover" }}
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <HiBars2/>
        </Row>
      </Container>
    </>
  );
};

export default HomeComponentDesktop;
