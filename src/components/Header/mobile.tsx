import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentMobile = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <img
              src="icon.svg"
              height={50}
              className="d-inline-block align-top"
              alt="Icon logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="justify-content-center">
          <Nav>
            <Nav.Item>
              <Nav.Link>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Endereço</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>Serviços</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponentMobile;
