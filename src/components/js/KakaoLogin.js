function KakaoLogin() {
  var baseURL = 'http://localhost:3000'
  const KAKAO_REST_API_KEY = "804ea67768ebdab4ecdd2a9157aac6b7"
  const KAKAO_CALLBACK_URI = baseURL + '/oauth/callback/kakao'
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_CALLBACK_URI}&response_type=code`

  const handleLogin = () => {
    window.location.href = KAKAO_AUTH_URL
  }

  return(
    <h1>
        <a href={KAKAO_AUTH_URL}>Kakao Login</a>
    </h1>
  )
}

export default KakaoLogin