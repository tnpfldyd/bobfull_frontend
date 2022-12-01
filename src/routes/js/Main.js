import {Container, Row, Col} from 'react-bootstrap';

function Main() {
  return(
    <Container>
      <h2>어떤 음식을 찾고 계세요?</h2>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><div>카테고리별로 보기</div></Col>
          <Col xs={5} className="main-choice"><div>음식점별로 보기</div></Col>
        </Row>
        <Row className="main-flex">
          <Col xs={5} className="main-choice"><div>음식룰렛</div></Col>
          <Col xs={5} className="main-choice"><div>식당추천</div></Col>
        </Row>
    </Container>
  )
}

export default Main