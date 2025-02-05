import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentDesktop = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" id="home">
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
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#contact">Contato</Nav.Link>
            <Nav.Link href="#contact">Endereço</Nav.Link>
            <Nav.Link href="#services">Serviços</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponentDesktop;
