function GoogleLogin() {
  var baseURL = 'http://localhost:3000'
  const SOCIAL_AUTH_GOOGLE_CLIENT_ID = "323207577725-isrne9k4vhitjpf11cetj98b2c3niuh2.apps.googleusercontent.com"
  const GOOGLE_CALLBACK_URI = baseURL + '/accounts/google/callback/'
  const scope = "https://www.googleapis.com/auth/userinfo.email"
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${SOCIAL_AUTH_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${GOOGLE_CALLBACK_URI}&scope=${scope}`

  return(
    <h1>
        <a href={GOOGLE_AUTH_URL}>Google Login</a>
    </h1>
  )
}

export default GoogleLogin