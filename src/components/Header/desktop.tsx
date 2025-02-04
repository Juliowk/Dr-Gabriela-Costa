import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentDesktop = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container fluid className="ms-5">
            <Navbar.Brand>
              <img
                src="icon.svg"
                height={70}
                className="d-inline-block align-top"
                alt="Icon logo"
              />
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>Home</Nav.Link>
              <Nav.Link>Contato</Nav.Link>
              <Nav.Link>Endereço</Nav.Link>
              <Nav.Link>Serviços</Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponentDesktop;
