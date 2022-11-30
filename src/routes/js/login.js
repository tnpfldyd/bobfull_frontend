import {Form} from 'react-bootstrap';
import axios from 'axios';
import {useState} from 'react';
import Cookies from 'js-cookie';


function Login() {
  let baseURL = process.env.REACT_APP_BASE_URL // 환경변수설정
  
  const [inputId, setInputId] = useState('')
  const [inputPw, setInputPw] = useState('')
  const [csrftoken, setCsrftoken] = useState('')
  const [info, setInfo] = useState({
    nickname: "",
    email: "",
    name: "",
    password: ""
  })
  const handleInputId = (e) => {
    setInputId(e.target.value)
  }
  const handleInputPw = (e) => {
    setInputPw(e.target.value)
  }
  const csrftokens = Cookies.get('csrftoken');
  
  let testData = {
    email: "test6@example.com",
    password: "crud1234",
    nickname: "admin1234",
    name: "kevin4162",
    alcohol: 0,
    talk: 1,
    smoke: 0,
    speed: 2,
    gender: 0,
    manner: 36.5
}
  

  
  return (
    <>
      <Form>
        <EmailCheck handleInputId={handleInputId}/>
        <PasswordCheck handleInputPw={handleInputPw}/>
      </Form>
      {console.log({inputId})}
      {console.log({inputPw})}
      <button onClick={()=>{
        setInfo(testData)
        console.log(info)
        console.log(baseURL)
      }}>상태테스트</button>
      <button onClick={()=>{
        axios.get(`${baseURL}user/auth/refresh/`)
          .then((res)=>{
            console.log(res)
          })
      }}>토큰갱신</button>

      <button 
        onClick={()=>{
          axios.post(`${baseURL}user/register/`, {
            nickname: info.nickname,
            email: info.email,
            name: info.name,
            password: info.password,
            alcohol: info.alcohol,
            talk: info.talk,
            smoke: info.smoke,
            speed: info.speed,
            gender: info.gender,
            manner: info.manner,
          },{
            headers: {
              'Content-Type':'application/json'
            }
          },{ 
            withCredentials: true 
          })
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{
              console.log(err)
            })
        }}>
          회원가입 테스트
      </button>
      <button onClick={()=>{
        axios.get("http://127.0.0.1:8000/user/csrf_cookie/", { 
          withCredentials: true 
        })
        .then((res)=>{
          console.log(res.headers.get('Set-Cookie'))
          setCsrftoken(res.headers.get('Set-Cookie'))
          console.log(csrftoken)
        })
        .catch((err)=>{
          console.log(err)
        })
      }}>
        csrf 테스트1
      </button>
      <button onClick={()=>{
        axios.get("http://http://127.0.0.1:8000/user/register/", { 
          withCredentials: true 
        })
        .then((res)=>{
          console.log(res)
        })
        .catch((err)=>{
          console.log(err)
        })
      }}>
        csrf 테스트2
      </button>
      <button 
        onClick={()=>{
          axios.post("http://127.0.0.1:8000/user/api-auth/login/", {
            nickname: 'shinyoonsik',
            password: 'crud1234',
          },{
            headers: {
              'X-CSRFToken':"VseB9b5TMkNWByUK8MX1pphitId7YFb3NUOxTNKJc6epHz1QBg0rPVSwURK1XRav",
            }
          },{ 
            withCredentials: true 
          })
            .then((res)=>{
              console.log(res)
            })
            .catch((err)=>{
              console.log(err)
            })
        }}>
        로그인 테스트
      </button>
    </>
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
            비밀번호는 반드시 8-20 글자 사이여야 합니다.<br/>
            문자와 숫자로만 이루어져야 합니다.<br/>
            공백이나 특수문자, 이모지등은 불가능합니다.
          </Form.Text>
        </Form.Group>
    </>
  );
}

function EmailCheck(props) {
  return (
    <>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="이메일주소" onChange={props.handleInputId} />
      </Form.Group>
    </>
  );
}


export default Login;