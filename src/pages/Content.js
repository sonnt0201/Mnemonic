import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
export const Content = ({ tasks }) => {
  return (
    <Container>
      {" "}
      <Row>
        {tasks.map((task) => (
          <>
            <Col lg="3">{task.name}</Col>
          </>
        ))}{" "}
      </Row>
    </Container>
  );
};
