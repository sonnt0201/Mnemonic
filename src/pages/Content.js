import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";
export const Content = ({ tasks }) => {
  const [,dispatchTasks] = useTasks();
  const formatTime = (time) => {
    const dateTime = new Date(time);
    const formattedDateTime = `
    ${dateTime.getDate()}/${dateTime.getMonth()+1}/${dateTime.getFullYear()} 
    ${dateTime.getHours()} giờ ${dateTime.getMinutes()} phút 
    `;
    return formattedDateTime;
  }
  return (
    <Container>
      {" "}
      <Row>
        {tasks.map((task) => (
          <>
            <Col lg="3" className="mt-3">
              <Card className="text-center">
                <Card.Header>
                  {formatTime(task.deadline)}
                  </Card.Header>

                <Card.Body>

                  <Card.Title>{task.name}</Card.Title>

                  <Card.Text>{task.note}</Card.Text>

                  <Button variant="primary" onClick={(e) => {
                      !task.isOverdue && dispatchTasks({
                        type: ActionEnum.TOGGLE_TASK,
                        payload: task.id
                      })
                  }}>
                    {task.isOverdue ? "Quá hạn" : task.isDone?"Đã xong" :"Chưa xong"}
                  </Button>
                  <Button variant="danger" onClick={(e) => {
                    dispatchTasks({
                      type: ActionEnum.REMOVE_TASK,
                      payload: task.id
                    })
                  }} >
                    Xóa
                  </Button>
                </Card.Body>
                {/* <Card.Footer className="text-muted">2 days ago</Card.Footer> */}
              </Card>
            </Col>
          </>
        ))}{" "}
      </Row>
    </Container>
  );
};
