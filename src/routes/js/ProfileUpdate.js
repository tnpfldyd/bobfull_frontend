import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import '../../components/css/Profileupdate.css';
import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function ProfileAdd() {
  let dispatch = useDispatch();
  var baseURL = process.env.REACT_APP_BASE_URL
  const user = useSelector((state) => state.user);
  const [userState, setUserState] = useState({})

  const ProfileUpdate = (e) => {
    e.preventDefault();
    let userspeed = 0;
    for (let i = 5; i < 10; i++) {
      if (e.target[i].checked === true) {
        userspeed = i - 4
      }
    }
    console.log(e.target[0].value);
    console.log(e.target[1].checked);
    console.log(e.target[2].checked)
    console.log(e.target[3].checked)
    console.log(e.target[4].checked)
    console.log(userspeed)
    axios({
      method: 'put',
      url: `${baseURL}/user/${user.pk}/`,
      headers: { 'Content-Type': 'application/json' },
      data: {
        nickname: 'yoon',
        gender: e.target[1].checked,
        smoke: e.target[2].checked,
        speed: userspeed,
        alcohol: e.target[3].checked,
        talk: e.target[4].checked,
      }
    })
      .then((res) => {
        console.log(res)
      })
  }
  return (
    <Container>
      <Form onSubmit={ProfileUpdate}>
        <h3 className="text-center my-5">프로필을 입력하면<br />나와 더 잘 맞는<br /> 밥풀을 만날 수 있어요.</h3>
        <Form.Control type='text' />
        <div className="d-flex align-items-center justify-content-between me-5 px-5">
          <h2 className="me-5 my-0">성별</h2>
          <label className="gender-button">
            {user.gender ? <input type="checkbox" /> : <input type="checkbox" defaultChecked />}
            <span className="onoff-switch"></span>
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-between me-5 px-5">
          <h2 className="me-5 my-0">흡연</h2>
          <label className="smoke-button">
            {user.smoke ? <input type="checkbox" /> : <input type="checkbox" defaultChecked />}
            <span className="onoff-switch"></span>
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-between me-5 px-5">
          <h2 className="me-5 my-0">음주</h2>
          <label className="alcohol-button">
            {user.alcohol ? <input type="checkbox" /> : <input type="checkbox" defaultChecked />}
            <span className="onoff-switch"></span>
          </label>
        </div>
        <div className="d-flex align-items-center justify-content-between me-5 px-5">
          <h2 className="me-5 my-0">대화</h2>
          <label className="talk-button">
            {user.talk ? <input type="checkbox" /> : <input type="checkbox" defaultChecked />}
            <span className="onoff-switch"></span>
          </label>
        </div>
        <br />
        <h2>식사 속도</h2>
        <div className="select d-flex justify-content-between">
          {user.speed === 1 ? <input type="radio" id="select1" name="speed" defaultChecked /> : <input type="radio" id="select1" name="speed" />}<label htmlFor="select1"><img className="speedimg" src="/snail.png" /></label>
          {user.speed === 2 ? <input type="radio" id="select2" name="speed" defaultChecked /> : <input type="radio" id="select2" name="speed" />}<label htmlFor="select2"><img className="speedimg" src="/turtle.png" /></label>
          {user.speed === 3 ? <input type="radio" id="select3" name="speed" defaultChecked /> : <input type="radio" id="select3" name="speed" />}<label htmlFor="select3"><img className="speedimg" src="/teddy-bear.png" /></label>
          {user.speed === 4 ? <input type="radio" id="select4" name="speed" defaultChecked /> : <input type="radio" id="select4" name="speed" />}<label htmlFor="select4"><img className="speedimg" src="/cheetah.png" /></label>
          {user.speed === 5 ? <input type="radio" id="select5" name="speed" defaultChecked /> : <input type="radio" id="select5" name="speed" />}<label htmlFor="select5"><img className="speedimg" src="/growth.png" /></label>
        </div>
        <div className='login-btn'>
          <button type='submit'>수정</button>
        </div>
      </Form>
    </Container>
  )
}

export default ProfileAdd