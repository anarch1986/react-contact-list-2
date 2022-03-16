
import { Container, Row, Col } from "react-bootstrap";


function NotFoundPage() {


  return (
    <Container>
      <Row>
        <Col xl={12}>
          <h1>404</h1>
		  <h1>Page Not Found</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default NotFoundPage;