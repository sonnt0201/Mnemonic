import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Stack from "react-bootstrap/Stack";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";
import Restore from "../assets/restore.svg";

export const DeletedContent = ({ tasks, setInputVal }) => {
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
                  <Stack direction="horizontal" gap={1} className="mx-auto justify-content-center"
                  style = {{
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    dispatchTasks({
                      type: ActionEnum.TOGGLE_DELETED,
                      payload: task.id,
                    });
                  }}
                  >
                    <img
                      className="restore-button"
                      src={Restore}
                      style={{ width: "8%", margin: "0"}}
                      
                     
                      alt="xoas"
                    /> 
                    <h6
                    style={{
                        
                        margin: "auto 0 auto",
                    }}>Lấy lại</h6>
                  
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
