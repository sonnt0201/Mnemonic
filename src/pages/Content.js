import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";
import Bin from "../assets/bin.svg";
import Change from "../assets/change.svg"
export const Content = ({ tasks, setInputVal }) => {
  const [, dispatchTasks] = useTasks();

  // footer để set số ngày còn lại tới deadline, hiển thị xem task đã hết hạn
  const footer = (task) => {
    // return task.countDaysLeft;
    if (task.isDone) return "✔️ Đã xong";
    if (task.countDaysLeft <= 0) return "❌ Hết hạn";
    if (task.countDaysLeft <= 1) return "⏰ Còn chưa đầy 1 ngày";
    return `Còn hơn ${Math.floor(task.countDaysLeft)} ngày nữa`;
  };

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
                    onMouseOver={(e) => {
                      e.target.style.cursor = "pointer";
                    }}
                  />
                  {formatTime(task.deadline)}
                </Card.Header>

                <Card.Body>
                  <Card.Title>{task.name}</Card.Title>

                  <Card.Text>{task.note}</Card.Text>
                  <Stack direction="horizontal" gap={3} className="mx-auto justify-content-center"
                  >
                    <img
                      className="bin-button"
                      src={Bin}
                      style={{ width: "10%" }}
                      onClick={(e) => {
                        dispatchTasks({
                          type: ActionEnum.TOGGLE_DELETED,
                          payload: task.id,
                        });
                      }}
                      onMouseOver={(e) => {
                        e.target.style.cursor = "default";
                        e.target.style.width = "12%"
                      }}
                      onMouseLeave={ e => {
                        e.target.style.width = "10%"
                      }}
                      alt="xoas"
                    />
                    <img
                      className="change-button"
                      src={Change}
                      style={{ width: "10%" }}
                      onClick={(e) => {

                        setInputVal(task.id);
                      }}
                      onMouseOver={(e) => {
                        e.target.style.cursor = "default";
                        e.target.style.width = "12%"
                      }}
                      onMouseLeave={ e => {
                        e.target.style.width = "10%"
                      }}
                      alt="sua"
                    />
                    
                  </Stack>
                </Card.Body>

                {task.deadline && (
                  <Card.Footer className="text-muted">
                    {footer(task)}
                  </Card.Footer>
                )}
              </Card>
            </Col>
          </>
        ))}{" "}
      </Row>
    </Container>
  );
};
