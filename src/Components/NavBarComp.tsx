import { Container, Nav, Navbar } from "react-bootstrap"
import CreateBtn from "./CreateBtn";

function NavBarComp() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <CreateBtn/>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBarComp;