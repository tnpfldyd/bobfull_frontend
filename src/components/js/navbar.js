import "./../css/navbar.css";
import Container from 'react-bootstrap/Container';
import { Nav, Navbar } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function NavbarBottom() {
  let navigate = useNavigate()
  const user = useSelector((state) => state.user);
  return (
    <Navbar className="footer d-flex" bg='light' expand="lg">
      <Container className="Nav-container">
        <Nav.Link onClick={() => { navigate('/main') }} className="navtext"><img src={'/restaurant.png'} className='icon' /></Nav.Link>
        <Nav.Link onClick={() => { navigate('/login') }} className="navtext"><img src={user.isLogin ? '/logout.png' : '/enter.png'} className='icon' /></Nav.Link>
        <Nav.Link onClick={() => { navigate('/community') }} className="navtext"><img src={'/conversation.png'} className='icon' /></Nav.Link>
        <Nav.Link onClick={() => { navigate('/profile') }} className="navtext"><img src={'/user.png'} className='icon' /></Nav.Link>
        <Nav.Link onClick={() => { navigate(-1) }} className="navtext"><img src={'/undo.png'} className='icon' /></Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBottom; 