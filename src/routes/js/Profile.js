import { useDispatch, useSelector } from "react-redux";
import { loginUser, clearUser } from '../../store/userSlice.js';
import { Container } from 'react-bootstrap'
import '../css/Profile.css'

function Profile() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const LogoutFunc = () => {
    console.log('로그아웃');
    dispatch(clearUser());
  }

  return (
    <Container>
      <h1>프로필</h1>

      {/* 프로필 이미지, 정보 */}
      <div class="profile-nickname">
        <img src="http://placeimg.com/75/75/people" alt="" className="profile-img"/>
        <div>
          <h4>{user.nickname}<span>  #{user.id}</span></h4>
        </div>
      </div>
      <button className="profile-btn">프로필 수정</button>

      {/* 매너온도 */}
      <div>
        <div>매너온도</div>
        <div className="profile-manner-num">
          <div>{user.manner}도</div>
          <div className="profile-manner-first">첫 온도 36.5℃</div>
        </div>
        <div className="profile-manner">
          <div className="profile-manner-check"></div>
        </div>
      </div>
      <button onClick={() => LogoutFunc()}>로그아웃</button>
    </Container>
  )
}

export default Profile