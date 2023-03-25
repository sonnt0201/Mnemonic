import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";
import Bin from "../assets/bin.svg";
export const Content = ({ tasks }) => {
  const [, dispatchTasks] = useTasks();
  const formatTime = (time) => {
    if (!time) return "Không có hạn";
    const dateTime = new Date(time);
    const formattedDateTime = `
    ${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} 
    ${dateTime.getHours()}:${dateTime.getMinutes()} 
    `;
    return formattedDateTime;
  };
  return (
    <Container>
      {" "}
      <Row>
        {tasks.map((task) => (
          <>
            <Col lg="3" className="mt-3">
              <Card className="">
                <Card.Header>
                  <Form.Check
                    type={"checkbox"}
                    inline
                    checked={task.isDone}
                    onChange={(e) => {
                      dispatchTasks({
                        type: ActionEnum.TOGGLE_TASK,
                        payload: task.id,
                      });
                    }}
                  />
                  {formatTime(task.deadline)}
                </Card.Header>

                <Card.Body>
                  <Card.Title>{task.name}</Card.Title>

                  <Card.Text>{task.note}</Card.Text>

                  <img
                    className="bin-button"
                    src={Bin}
                    style={{ width: "8%" }}
                    onClick={(e) => {
                      dispatchTasks({
                        type: ActionEnum.REMOVE_TASK,
                        payload: task.id,
                      });
                    }}
                    onMouseOver={(e) => {
                      e.target.style.cursor = "pointer";
                    }}
                    alt="xoas"
                  />
                </Card.Body>

                {
                  <Card.Footer className="text-muted">
                    {(task.countDaysLeft > 0)
                      ? `⏰ Còn hơn 
                    ${task.countDaysLeft}
                   ngày nữa`
                      : (task.countDaysLeft <= 0)
                      ? `Quá hạn`
                      : `⏰`}
                  </Card.Footer>
                }
              </Card>
            </Col>
          </>
        ))}{" "}
      </Row>
    </Container>
  );
};
