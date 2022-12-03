import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/Main.css'


function Main() {
  return(
    <Container className='main-container'>
      <h2>어떤 식당을 찾고 계세요?</h2>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><Link to="/res_category">카테고리별</Link></Col>
          <Col xs={5} className="main-choice"><Link to="/res_index">음식점별</Link></Col>
        </Row>
        <h2>이런 음식은 어떠세요?</h2>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><Link to="/roulette">음식룰렛</Link></Col>
          <Col xs={5} className="main-choice"><Link to="/">식당추천</Link></Col>
        </Row>
        <h2>수다가 필요하신가요?</h2>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><Link to="/roulette">커뮤니티</Link></Col>
          <Col xs={5} className="main-choice"><Link to="/">식당추천</Link></Col>
        </Row>
    </Container>
  )
}

export default Main