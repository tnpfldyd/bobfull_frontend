import axios from 'axios'
import { useEffect, useState } from 'react';

function Restaurants() {
  var baseURL = process.env.REACT_APP_BASE_URL
  const [restaurants, setRestaurants] = useState()
  const getRes = async () => {
    const res = await axios.get(`${baseURL}/restaurant/`, {headers: { 'Content-Type': 'application/json' }})
    setRestaurants(res.data)
  }

  useEffect(() => {
    getRes()
  }, [])

  console.log(decodeURIComponent('https%3A/img1.kakaocdn.net/cthumb/local/R0x420/%3Ffname%3Dhttp%253A%252F%252Ft1.daumcdn.net%252Flocalfiy%252F0E5A318194D440E3B860D1490A8E9BA9'))
  console.log(restaurants)
  return (
    <>
      <h6>현재위치</h6>
      <form action="">
        <input type="text" />
        <input type="submit" value="검색"/>
      </form>
      <div>지도로보기</div>
      <div>
        <div>필터</div>
      </div>
      {
        restaurants != null ? restaurants.map((data)=>{
          return(
            <div>
              <div>아이디값 : {data.id} | 식당명 : {data.name} | 주소 : {data.address}</div>
              {data.images.map((img, i)=> {
                return(<img src={decodeURIComponent(data.images[i].image.replace('http://127.0.0.1:8000/media/',''))}></img>)
              })}
              
            </div>)
        }) : null
      }
    </>
  )
}
export default Restaurants