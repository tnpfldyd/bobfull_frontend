import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import '../css/ResDetail.css';
import styled from '../../components/css/Button.module.css';

function RestaurantsDetail() {
  let {id} = useParams();
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
  
  return (
    <Container>
      <div>디테일</div>
      <div>{id}</div>
      {
        restaurant ? 
          <>
            <div>식당번호 : {restaurant.id} | 식당명 : {restaurant.name} | 카테고리 : {restaurant.category_name} </div>
            <div className='res-img-wrapper'>
              {restaurant.images.map((img, i)=> {
                return (
                    <img src={decodeURIComponent(restaurant.images[i].image.replace('http://127.0.0.1:8000/media/',''))} className='res-img'/>
                  )
                })}
            </div>  
            <div>메뉴 : {restaurant.detail}</div>
          </>
          : null
      }
      {
        reviews ?
          <>
            <h3>식당리뷰</h3>
            {reviews.map((el, i)=>{
              return(
                <div>
                  <div>{reviews[i].user} | {reviews[i].title} | {reviews[i].content} | {reviews[i].grade} | {reviews[i].updated_at} | </div>
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
          type="email"
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