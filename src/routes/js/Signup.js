import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '../../components/css/Button.module.css';

function Signup() {
  var baseURL = process.env.REACT_APP_BASE_URL
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const onSubmit = (e) => {
    e.preventDefault();
    if (password1 !== password2) {
      return alert('비밀번호가 서로 다릅니다.')
    }
    axios({
      method: 'post',
      url: `${baseURL}/accounts/registration/`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: {
        // username: username,
        email: email,
        password1: password1,
        password2: password2,
      }
    })
      .then(res => {
        console.log(res)
        if (res.status === 201) {
          return alert('성공적으로 회원가입 되었습니다.')
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        {/* <input
          onChange={(e) => {
            setUsername(e.target.value)
          }}
          value={username}
          type="text"
          placeholder='이름'
          className={styled.input}
        /> */}
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

