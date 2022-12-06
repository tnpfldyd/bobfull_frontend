import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCode } from "./store/KakaoAuth.js";
import { Spinner } from 'react-bootstrap';
import axios from "axios";


const Auth = () => {
  const dispatch = useDispatch()
  const code = new URL(window.location.href).searchParams.get('code')

  useEffect(() => {
    dispatch(setCode({code: code}))
    var baseURL = process.env.REACT_APP_BASE_URL // 환경변수설정
    const KAKAO_CALLBACK_URI = baseURL + 'accounts/kakao/callback/'
    axios({
      method: 'get',
      url: `${KAKAO_CALLBACK_URI}?code=${code}`,
    })
      .then((res) => {
        console.log(res.data)
      })
  }, [])

  
  return (
    <>
      <Spinner animation="border" />
    </>
  )
}

export default Auth