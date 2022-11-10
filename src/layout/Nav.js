import { Navbar, Nav, Container } from 'react-bootstrap';

function Thenavbar() {
    return(
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="Projets">Pro</Nav.Link>
            <Nav.Link href="WhoIAm">Portrait</Nav.Link>
            <Nav.Link href="Contact">Contact</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">A voir</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}

export default Thenavbar;