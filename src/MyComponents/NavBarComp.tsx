import { Container, Nav, Navbar } from "react-bootstrap"

function NavBarComp() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="About">About Us</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBarComp;