import "./../css/navbar.css";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';

function NavbarBottom() {
  return (
    <Navbar sticky='bottom' bg="light" expand="lg">
      <Container className="Nav-container">
            <Nav.Link href="#home">홈</Nav.Link>
            <Nav.Link href="#link">뭐</Nav.Link>
            <Nav.Link href="#link">넣</Nav.Link>
            <Nav.Link href="#link">을</Nav.Link>
            <Nav.Link href="#link">까</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBottom;