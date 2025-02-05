import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Container
      fluid
      className="mt-3 bg-light d-flex justify-content-center align-items-center pt-3"
    >
      <p>
        Desenvolido por:{" "}
        <a
          className="link-secondary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          href="https://github.com/Juliowk"
          target="_blank"
        >
          Júlio Elias De Sousa Rocha
        </a>
      </p>
    </Container>
  );
};

export default FooterComponent;
