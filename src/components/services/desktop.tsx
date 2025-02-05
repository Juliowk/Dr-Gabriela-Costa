import { Card, Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { FaWhatsapp } from "react-icons/fa";

function ServicesComponentDesktop() {
  return (
    <Carousel className="custom-carousel carousel-dark py-5" id="services">
      <Carousel.Item className="mb-4">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <Card className="d-flex flex-row">
                <Card.Img
                  variant="top"
                  src="servicesImages/clareamento.png"
                  style={{ width: "400px", height: "auto" }}
                />
                <Card.Body style={{ width: "400px", height: "auto" }}>
                  <Card.Title className="display-5">Clareamento</Card.Title>

                  <Card.Text className="lead" style={{ fontSize: "19px" }}>
                    Quer transformar o seu sorriso e conquistar a confiança que
                    você merece? O clareamento dental é a solução ideal para
                    quem deseja ter dentes mais brancos e brilhantes, realçando
                    sua autoestima e trazendo mais harmonia ao seu rosto. Com
                    técnicas modernas e seguras, é possível alcançar resultados
                    rápidos e eficazes. Não deixe para depois! Entre em contato
                    conosco e agende sua consulta. Vamos juntos garantir que seu
                    sorriso seja o destaque que você sempre sonhou!
                  </Card.Text>

                  <Card.Text className="mt-4">
                    <a
                      className="btn btn-success btn-lg w-100"
                      href="https://wa.me/558188632050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20clareamento!"
                      target="_blank"
                    >
                      <FaWhatsapp size={30} /> Entre em contato!
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
      <Carousel.Item className="mb-4">
        <Container className="d-flex justify-content-center align-items-center">
          <Row>
            <Col>
              <Card className="d-flex flex-row">
                <Card.Img
                  variant="top"
                  src="servicesImages/botox.png"
                  style={{ width: "400px", height: "auto" }}
                />
                <Card.Body style={{ width: "400px", height: "auto" }}>
                  <Card.Title className="display-5">Botox</Card.Title>

                  <Card.Text className="lead" style={{ fontSize: "19px" }}>
                    Quer rejuvenescer e realçar ainda mais a sua beleza? O botox
                    é a solução ideal para suavizar rugas e linhas de expressão,
                    proporcionando um aspecto mais jovem e relaxado. Com
                    resultados naturais e duradouros, o botox é a escolha
                    perfeita para quem busca um tratamento eficaz e sem grandes
                    intervenções. Não espere mais para se sentir ainda mais
                    confiante! Entre em contato agora e agende sua sessão. Vamos
                    juntos te ajudar a alcançar o visual que você deseja!
                  </Card.Text>

                  <Card.Text className="mt-4">
                    <a
                      className="btn btn-success btn-lg"
                      href="https://wa.me/558188632050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20botox!"
                      target="_blank"
                    >
                      <FaWhatsapp size={30} /> Entre em contato!
                    </a>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Carousel.Item>
    </Carousel>
  );
}

export default ServicesComponentDesktop;
