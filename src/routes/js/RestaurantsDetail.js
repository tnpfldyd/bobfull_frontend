import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';

function RestaurantsDetail() {
  let {id} = useParams();
  var baseURL = process.env.REACT_APP_BASE_URL
  const [restaurant, setRestaurant] = useState()
  const getRes = async () => {
    const res = await axios.get(`${baseURL}/restaurant/`, {headers: { 'Content-Type': 'application/json' }})
    setRestaurant(res.data[id-1])
  }
  console.log(restaurant)
  // 랜더링시 레스토랑 정보 받아오기
  useEffect(() => {
    getRes()
  }, [])

  return (
    <>
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
            <div>메뉴 : {[...restaurant.detail]}</div>
          </>
          : null
      }
      <div>매칭룸 입장하기</div>
    </>
  )
}

export default RestaurantsDetail