import styled from '../css/Button.module.css'

function GoogleLogin() {
  var baseURL = 'http://localhost:3000'
  const SOCIAL_AUTH_GOOGLE_CLIENT_ID = "323207577725-isrne9k4vhitjpf11cetj98b2c3niuh2.apps.googleusercontent.com"
  const GOOGLE_CALLBACK_URI = baseURL + '/accounts/google/callback/'
  const scope = "https://www.googleapis.com/auth/userinfo.email"
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${SOCIAL_AUTH_GOOGLE_CLIENT_ID}&response_type=code&redirect_uri=${GOOGLE_CALLBACK_URI}&scope=${scope}`

  return (
    <a href={GOOGLE_AUTH_URL} style={{ textDecoration: 'none' }}><div className={styled.sociallogingoogle} role="button" aria-disabled="false" tabindex="0"><svg viewBox="0 0 20 20"
      class={styled.googleLogo}><g><path d="M19.9996 10.2297C19.9996 9.54995 19.9434 8.8665 19.8234 8.19775H10.2002V12.0486H15.711C15.4823 13.2905 14.7475 14.3892 13.6716 15.0873V17.586H16.9593C18.89 15.8443 19.9996 13.2722 19.9996 10.2297Z" fill="#4285F4"></path><path d="M10.2002 20.0003C12.9518 20.0003 15.2723 19.1147 16.963 17.5862L13.6753 15.0875C12.7606 15.6975 11.5797 16.0429 10.2039 16.0429C7.54224 16.0429 5.28544 14.2828 4.4757 11.9165H1.08301V14.4923C2.81497 17.8691 6.34261 20.0003 10.2002 20.0003Z" fill="#34A853"></path><path d="M4.47227 11.9163C4.04491 10.6743 4.04491 9.32947 4.47227 8.0875V5.51172H1.08333C-0.363715 8.33737 -0.363715 11.6664 1.08333 14.4921L4.47227 11.9163Z" fill="#FBBC04"></path><path d="M10.2002 3.95756C11.6547 3.93552 13.0605 4.47198 14.1139 5.45674L17.0268 2.60169C15.1824 0.904099 12.7344 -0.0292099 10.2002 0.000185607C6.34261 0.000185607 2.81497 2.13136 1.08301 5.51185L4.47195 8.08764C5.27795 5.71762 7.53849 3.95756 10.2002 3.95756Z" fill="#EA4335"></path></g></svg>Google로 계속하기</div></a>
  )
}

export default GoogleLogin