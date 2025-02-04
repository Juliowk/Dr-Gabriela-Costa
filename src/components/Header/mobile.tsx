import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentMobile = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <img
              src="icon.svg"
              height={"60px"}
              alt="Icon logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Navbar
        bg="light"
        data-bs-theme="light"
        className={isSticky ? "fixed-top" : ""}
      >
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
