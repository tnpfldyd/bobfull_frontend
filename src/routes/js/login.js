import { Container, Form } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from '../../store/userSlice.js';
import '../css/Login.css'

function Login() {
  var baseURL = process.env.REACT_APP_BASE_URL // 환경변수설정
  let dispatch = useDispatch();
  
  const [inputId, setInputId] = useState('') // 아이디
  const [inputPw, setInputPw] = useState('') // 비밀번호
  const [loading, setLoading] = useState(false) // 로딩
  const [msg, setMsg] = useState("")  // 메시지
  const handleInputId = (e) => {  // 아이디 값 받기
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {  // 비밀번호 값 받기
    setInputPw(e.target.value)
  }


  const LoginFunc = (e) => {
    e.preventDefault();
    if (!inputId) {
      return alert("ID를 입력하세요.");
    }
    else if (!inputPw) {
      return alert("Password를 입력하세요.");
    } else {
      axios.post(`${baseURL}/accounts/login/`, {
        email: inputId,
        password: inputPw,
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      }, {
        withCredentials: true
      })
        .then((res) => {
          console.log(res)
          console.log(res.status)
          if (res.status === 200) {
            console.log("로그인")
            console.log(res.data.user)
            dispatch(loginUser(res.data.user))
            setMsg("")
          }
          if(res.status === 400) {
            setMsg("ID, Password가 비어있습니다.");
          }
          if(res.status === 401) {
            setMsg("존재하지 않는 ID입니다.");
          }
          if(res.status === 402) {
            setMsg("Password가 틀립니다.");
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
    setLoading(true);
  }

  useEffect(() => {
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg])

  return (
    <Container className='login-container'>
    <div className='login-layout'>
      <div className='login-logo'>
        <img src="/logo.png" alt="" width="100px"/>
      </div>
      <h3 className='text-center mb-5'>간편하게 로그인하고 
        <br/>다양한 서비스를 이용하세요</h3>
      <Form onSubmit={LoginFunc} className="login-form">
        <EmailCheck handleInputId={handleInputId} />
        <PasswordCheck handleInputPw={handleInputPw} />
        <div className='login-btn'>
          <button type='submit' disabled={loading}>로그인</button>
        </div>
      </Form>
      <div className='login-menu'>
        <div>아이디 찾기</div>
        <div>비밀번호 찾기</div>
        <div>회원가입</div>
      </div>
    </div>
    </Container>
  )
}


function PasswordCheck(props) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          type="password"
          aria-describedby="passwordHelpBlock"
          placeholder="비밀번호"
          onChange={props.handleInputPw}
        />
        <Form.Text id="passwordHelpBlock" muted>
          비밀번호는 반드시 8-20 글자 사이여야 합니다.<br />
          문자와 숫자로만 이루어져야 합니다.<br />
          공백이나 특수문자, 이모지등은 불가능합니다.
        </Form.Text>
      </Form.Group>
    </>
  );
}

function EmailCheck(props) {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Control type="email" placeholder="이메일주소" onChange={props.handleInputId} />
    </Form.Group>
  );
}

export default Login;