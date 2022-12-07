import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../css/ResDetail.css';
import styled from '../../components/css/Button.module.css';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RestaurantsDetail() {
  let { id } = useParams();
  var baseURL = process.env.REACT_APP_BASE_URL
  const [restaurant, setRestaurant] = useState()
  const [reviews, setReviews] = useState()
  const [menus, setMenus] = useState()
  const [grades, setGrades] = useState(0)

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
    console.log(e.target[0].value)
    const submit = await axios({
      method: 'post',
      url: `${baseURL}/articles/${id}/review/`,
      data: {
        content: e.target[0].value,
        grade: '⭐⭐⭐⭐⭐'
      }
    })
    e.target[0].reset();
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20px"
  };
  return (
    <Container>
      {
        restaurant ?
          <>
            <Slider {...settings}>
              {restaurant.images.map((img, i) => {
                return (
                  <img src={decodeURIComponent(restaurant.images[i].image.replace('http://127.0.0.1:8000/media/', ''))} className='res-detail-img' />
                )
              })}
            </Slider>
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
            <h3 className={styled.review}>식당리뷰 {reviews.length ? <span className='review-span'>{reviews.length}개의 리뷰 {grades} </span> : <span className='review-span'>아직 리뷰가 없어요 😥</span>}</h3>
            {reviews.map((el, i) => {
              return (
                <div className='review-p'>
                  <p>{reviews[i].user} <span className='res-date'>{detailDate(new Date(reviews[i].updated_at))}</span> <br /> {reviews[i].content} {reviews[i].grade} </p>
                </div>
              )
            })}
          </>
          : null
      }
      <h3>리뷰작성하기</h3>
      <Form onSubmit={onSubmitReview}>
        <Form.Control
          type="text"
          placeholder='식당리뷰'
          className='mb-3'
        />

        <button>작성</button>
      </Form>
      <div>매칭룸 입장하기</div>
    </Container>
  )
}

export default RestaurantsDetail