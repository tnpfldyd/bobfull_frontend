import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../css/ResDetail.css';
import styled from '../../components/css/Button.module.css';
function RestaurantsDetail() {
  let { id } = useParams();
  var baseURL = process.env.REACT_APP_BASE_URL
  const [restaurant, setRestaurant] = useState()
  const [reviews, setReviews] = useState()
  const [menus, setMenus] = useState()

  const getRes = async () => {
    const res = await axios.get(`${baseURL}/restaurant/${id}/`, { headers: { 'Content-Type': 'application/json' } })
    setRestaurant(res.data)
    setMenus(res.data.detail.split(', '))
  }
  const getReviews = async () => {
    const review = await axios({
      method: "get",
      url: `${baseURL}/articles/${id}/review/`
    })
    setReviews(review.data)

  }

  // 랜더링시 레스토랑 정보 받아오기
  useEffect(() => {
    getRes()
    getReviews()
  }, [])

  const onSubmitReview = async (e) => {
    e.preventDefault();
    const submit = await axios({
      method: 'post',
      url: `${baseURL}/accounts/registration/`,
      data: {
        title: 1,
        content: 1,
      }
    })
  }
  const detailDate = (a) => {
    const milliSeconds = new Date() - a;
    const seconds = milliSeconds / 1000;
    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  };
  return (
    <Container>
      {
        restaurant ?
          <>
            <div className='res-img-wrapper res-img-div'>
              {restaurant.images.map((img, i) => {
                return (
                  <img src={decodeURIComponent(restaurant.images[i].image.replace('http://127.0.0.1:8000/media/', ''))} className='res-img' />
                )
              })}
            </div>
            <button className={styled.category}>{restaurant.category_name}</button>
            <h3 className={styled.name}>
              {restaurant.name}
            </h3>
            <p>인기메뉴</p>
            {menus.map((menu) =>
              <p className={styled.menuname}>{menu}</p>
            )}
          </>
          : null
      }
      {
        reviews ?
          <>
            <h3>식당리뷰</h3>
            {reviews.map((el, i) => {
              return (
                <div>
                  <div>{reviews[i].user} | {reviews[i].title} | {reviews[i].content} | {reviews[i].grade} | {detailDate(new Date(reviews[i].updated_at))} | </div>
                </div>
              )
            })}
          </>
          : null
      }
      <h3>리뷰작성하기</h3>
      <Form onSubmit={onSubmitReview}>
        <Form.Control
          onChange={1}
          type="email"
          placeholder='식당리뷰'
          className='mb-3'
        />
        <Form.Control
          onChange={1}
          type="text"
          placeholder='식당리뷰'
          className='mb-3'
        />
        <button formAction=''>작성</button>
      </Form>
      <div>매칭룸 입장하기</div>
    </Container>
  )
}

export default RestaurantsDetail