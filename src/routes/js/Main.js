import { Container, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import '../css/Main.css'


function Main() {
  return(
    <Container>
      <h2>어떤 음식을 찾고 계세요?</h2>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><Link to="/res_category">카테고리별로 보기</Link></Col>
          <Col xs={5} className="main-choice"><Link to="/res_index">음식점별로 보기</Link></Col>
        </Row>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><Link to="/roulette">음식룰렛</Link></Col>
          <Col xs={5} className="main-choice"><Link to="/">식당추천</Link></Col>
        </Row>
    </Container>
  )
}

export default Main