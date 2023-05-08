import { Button, Container, Nav, Navbar } from "react-bootstrap"
import CreateBtn from "./CreateBtn";
import { useNavigate } from "react-router-dom";

function NavBarComp() {

  const navigate = useNavigate();

    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/Home">MaisonDuGout</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/Home">Home</Nav.Link>
            <Nav.Link href="/About">About Us</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <CreateBtn/>
            <Button onClick={()=> navigate('/')} variant="outline-light" style={{marginLeft: '25px'}} >Log Out</Button>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavBarComp;