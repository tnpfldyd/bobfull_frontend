import "./../css/navbar.css";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";

function NavbarBottom() {
  let navigate = useNavigate()
  return (
    <Navbar sticky='bottom' bg="light" expand="lg">
      <Container className="Nav-container">
            <Nav.Link onClick={()=>{ navigate('/main') }}>홈</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로</Nav.Link>
            <Nav.Link onClick={()=>{ navigate(1) }}>앞으로</Nav.Link>
            <Nav.Link href="#link">커뮤니티</Nav.Link>
            <Nav.Link href="#link">프로필</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBottom;