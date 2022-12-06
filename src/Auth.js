import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "./store/KakaoAuth.js";
import { Spinner } from 'react-bootstrap';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { loginUser, clearUser } from './store/userSlice.js'

const Auth = () => {
  const dispatch = useDispatch()
  const code = new URL(window.location.href).searchParams.get('code')
  let navigate = useNavigate()

  useEffect(() => {
    dispatch(setCode({code: code}))
    const BASE_URL = 'http://localhost:3000/'
    const KAKAO_CALLBACK_URI = BASE_URL + 'oauth/callback/kakao'
    const KAKAO_REST_API_KEY = "804ea67768ebdab4ecdd2a9157aac6b7"
    var baseURL = process.env.REACT_APP_BASE_URL // 환경변수설정
    axios({
      method: 'get',
      url: `http://localhost:8000/accounts/kakao/callback/?code=${code}`,
    })
      .then((res) => {
        console.log({...res.data.user})
        dispatch(loginUser({...res.data.user, access_token: res.data.access_token, refresh_token: res.data.refresh_token}))
        axios.defaults.headers.common['Authorization'] = `Bearer ${res.data.access_token}`
        alert('정상적으로 로그인 되었습니다.')
        navigate('/profile')
      })
  }, [])

  
  return (
    <>
      <Spinner animation="border" />
    </>
  )
}

export default Auth