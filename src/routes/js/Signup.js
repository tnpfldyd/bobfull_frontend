import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../../components/css/Button.module.css';

function Signup() {
  var baseURL = process.env.REACT_APP_BASE_URL
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [name, setName] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      return alert('ㅂㅂㅂㅂㅂㅂㅂㅂ')
    }
    axios({
      method: 'post',
      url: `${baseURL}/user/register/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        email: email,
        nickname: nickname,
        password: password1,
        name: name,
        alcohol: false,
        talk: false,
        smoke: false,
        speed: 3,
        gender: false,
        manner: 36.5,
      }
    })
      .then(res => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={(e) => {
            setNickname(e.target.value)
          }}
          value={nickname}
          type="text"
          placeholder='아이디'
          className={styled.input}
        />
        <input
          onChange={(e) => {
            setName(e.target.value)
          }}
          value={name}
          type="text"
          placeholder='이름'
          className={styled.input}
        />
        <input
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          type="email"
          placeholder='이메일'
          className={styled.input}
        />
        <input
          onChange={(e) => {
            setPassword1(e.target.value)
          }}
          value={password1}
          type="password"
          placeholder='비밀번호'
          className={styled.input}
        />
        <input
          onChange={(e) => {
            setPassword2(e.target.value)
          }}
          value={password2}
          type="password"
          placeholder='비밀번호 확인'
          className={styled.input}
        />
        <button className={styled.btn} formAction=''>회원가입</button>
      </form>
    </div>
  );
}
export default Signup;

