import "./../css/navbar.css";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


function NavbarBottom() {
  let navigate = useNavigate()
  const user = useSelector((state) => state.user);
  return (
    <Navbar sticky='bottom' bg="light" expand="lg">
      <Container className="Nav-container">
        <Nav.Link onClick={()=>{ navigate('/main') }}>홈</Nav.Link>
        <Nav.Link onClick={()=>{ navigate(-1) }}>뒤로</Nav.Link>
        <Nav.Link onClick={()=>{ navigate('/login') }}>{user.isLogin ? "로그아웃" : '로그인'}</Nav.Link>
        <Nav.Link onClick={()=>{ navigate('/community') }}>커뮤니티</Nav.Link>
        <Nav.Link onClick={()=>{ navigate('/profile/:id') }}>프로필</Nav.Link>
      </Container>
    </Navbar>
  );
}

export default NavbarBottom; 