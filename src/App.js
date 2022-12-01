import "./App.css";
import { useState } from "react";
import axios from "axios";
import Main from './routes/js/Main.js'
import {Login, MyPage} from './routes/js/Login.js'
import Restaurants from './routes/js/Restaurants.js'
import Category from './routes/js/Category.js'
import NavbarBottom from './components/js/navbar.js'
import Community from './routes/js/Communities.js'
import { Routes, Route, Link, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
    
    return (
      <div className="App">
        <Container className="base-container">
        {/* 페이지나누기 */}
          <Routes>
            <Route path="*" element={<div>404페이지</div>} />
            <Route path="/main" element={<Main />} />  {/* 메인페이지 */}
            <Route path="/login" element={user.isLogin ? <MyPage /> : <Login />} /> {/* 로그인페이지 */}
            <Route path="/res_index" element={<Restaurants />} />
            <Route path="/res_category" element={<Category />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </Container>
        <NavbarBottom />
        </div>
    );
}



export default App;
