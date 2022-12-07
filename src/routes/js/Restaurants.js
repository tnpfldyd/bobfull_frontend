import axios from 'axios'
import { useEffect, useState } from 'react';
import '../css/Restaurants.css'
import { Container } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Location from '../../hooks/useWatchLocation.js'

function Restaurants() {
  var baseURL = process.env.REACT_APP_BASE_URL
  const [restaurants, setRestaurants] = useState()
  const getRes = async () => {
    const res = await axios.get(`${baseURL}/restaurant/`, { headers: { 'Content-Type': 'application/json' } })
    setRestaurants(res.data)
  }

  // 랜더링시 레스토랑 정보 받아오기
  useEffect(() => {
    getRes()
  }, [])

  if (restaurants != null) {
    restaurants.map((data) => {
      {
        data.images.map((img, i) => {
          console.log(decodeURIComponent(data.images[i].image.replace('http://127.0.0.1:8000/media/', '')))
        })
      }
    })
  }

  return (
    <Container>
      <h6>현재위치</h6>
      <Location />
      <form action="">
        <input type="text" />
        <input type="submit" value="검색" />
      </form>
      <Link to='/map'>지도로보기</Link>
      <div>
        <div>필터</div>
      </div>
      {
        restaurants ? restaurants.map((data, idx) => {
          const res_idx = '/res_detail/' + data.id
          return (
            <div className='res-one' key={idx}>
              <div className='res-img-wrapper'>
                {data.images.map((img, i) => {
                  return (
                    <img src={decodeURIComponent(data.images[i].image.replace('http://127.0.0.1:8000/media/', ''))} className='res-img' />
                  )
                })}
              </div>
              <Link to={res_idx}>식당번호 : {data.id} | 식당명 : {data.name} | 카테고리 : {data.category_name} </Link>
              <div className='res-detail'>
                <div>별점</div>
                <div>거리</div>
              </div>
            </div>)
        }) : null
      }
    </Container>
  )
}

export default Restaurants