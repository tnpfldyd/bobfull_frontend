import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from '../../store/userSlice.js';


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
      axios.post(`${baseURL}/user/auth/`, {
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
        })
        .catch((err) => {
          console.log(err)
        })
    }
    setLoading(true);
  }

  useEffect(()=>{
    if (msg) {
      setTimeout(() => {
        setMsg("");
        setLoading(false);
      }, 1500);
    }
  }, [msg])

  return (
      <Form onSubmit={LoginFunc}>
        <EmailCheck handleInputId={handleInputId} />
        <PasswordCheck handleInputPw={handleInputPw} />
        <button type='submit' disabled={loading}>로그인</button>
      </Form>
  )
}


function PasswordCheck(props) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control
          type="password"
          id="inputPassword5"
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


function MyPage() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogoutFunc = () => {
    console.log('로그아웃');
    dispatch(clearUser());
  }

  return (
    <>
      <h1>MyPage</h1>
      <p>{user.name}님, 안녕하세요!</p>
      <button onClick={() => LogoutFunc()}>로그아웃</button>
    </>
  )
}

export { Login, MyPage } ;