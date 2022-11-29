import "./App.css";
import { useState } from "react";
import axios from "axios";
import Main from './routes/js/Main.js'
import Login from './routes/js/login.js'
import NavbarBottom from './components/js/navbar.js'
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
    let [test, setTest] = useState([])

    return (
        <div className="App">
            <Container className="base-container">
                <h1>연습</h1>
                    <button
                        onClick={() => {
                            axios.get("http://127.0.0.1:8000/articles/review/1/").then((res) => {
                                let copy = [...test]
                                copy.push(res.data.content)
                                setTest(copy)
                            });
                        }}
                    >
                        버튼
                    </button>
                    {console.log(test)}
            
            {/* 페이지나누기 */}
            <Routes>
                    <Route path="*" element={<div>404페이지</div>}></Route>
                    <Route path="/main" element={<Main/>}></Route>  {/* 메인페이지 */}
                    <Route path="/login" element={<Login/>}></Route>
            </Routes>
            </Container>
            <NavbarBottom/>
        </div>
    );
}



export default App;
