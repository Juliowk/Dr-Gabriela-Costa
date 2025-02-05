import { Card, Carousel, Container } from "react-bootstrap";
import { FaWhatsapp } from "react-icons/fa";

const ServicesComponentMobile = () => {
  return (
    <Container className="mt-5">
      <Carousel className="custom-carousel carousel-dark" controls={false}>
        <Carousel.Item>
          <Card className="mb-5">
            <Card.Img
              variant="top"
              style={{ height: "500px", objectFit: "cover" }}
              src="servicesImages/clareamento.png"
            />
            <Card.Body>
              <Card.Title className="display-3">Clareamento</Card.Title>
              <Card.Text className="lead fs-6">
                Quer transformar o seu sorriso e conquistar a confiança que você
                merece? O clareamento dental é a solução ideal para quem deseja
                ter dentes mais brancos e brilhantes, realçando sua autoestima e
                trazendo mais harmonia ao seu rosto. Com técnicas modernas e
                seguras, é possível alcançar resultados rápidos e eficazes. Não
                deixe para depois! Entre em contato conosco e agende sua
                consulta. Vamos juntos garantir que seu sorriso seja o destaque
                que você sempre sonhou!
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
        </Carousel.Item>

        <Carousel.Item>
          <Card className="mb-5">
            <Card.Img
              variant="top"
              style={{ height: "500px", objectFit: "cover" }}
              src="servicesImages/botox.png"
            />
            <Card.Body>
              <Card.Title className="display-3">Botox</Card.Title>

              <Card.Text className="lead fs-6">
                Quer rejuvenescer e realçar ainda mais a sua beleza? O botox é a
                solução ideal para suavizar rugas e linhas de expressão,
                proporcionando um aspecto mais jovem e relaxado. Com resultados
                naturais e duradouros, o botox é a escolha perfeita para quem
                busca um tratamento eficaz e sem grandes intervenções. Não
                espere mais para se sentir ainda mais confiante! Entre em
                contato agora e agende sua sessão. Vamos juntos te ajudar a
                alcançar o visual que você deseja!
              </Card.Text>
              <Card.Text className="mt-4">
                <a
                  className="btn btn-success btn-lg w-100"
                  href="https://wa.me/558188632050?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20botox!"
                  target="_blank"
                >
                  <FaWhatsapp size={30} /> Entre em contato!
                </a>
              </Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default ServicesComponentMobile;
