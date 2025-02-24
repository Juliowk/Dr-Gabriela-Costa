import { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

const HeaderComponentMobile = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 91) {
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
      <Navbar bg="light" data-bs-theme="light" id="home">
        <Container className="justify-content-center">
          <Navbar.Brand>
            <img src="icon.svg" height={"60px"} alt="Icon logo" />
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
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contato</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Endereço</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#services">Serviços</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default HeaderComponentMobile;
