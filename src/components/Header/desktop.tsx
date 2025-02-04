import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentDesktop = () => {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="w-50">
          <div>
              <Navbar.Brand>
                <img
                  src="icon.svg"
                  height={70}
                  className="d-inline-block align-top"
                  alt="Icon logo"
                />
              </Navbar.Brand>
          </div>
          <div>
              <Nav className="me-auto">
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Contato</Nav.Link>
                <Nav.Link>Endereço</Nav.Link>
                <Nav.Link>Serviços</Nav.Link>
              </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponentDesktop;
