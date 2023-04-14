import { formatTime } from "../utils"
import { Form, Card, Col, Stack } from "react-bootstrap";
import { useTasks, ActionEnum } from "../stores";
import Bin from "../assets/bin.svg";
import Change from "../assets/change.svg"
export const Item = ({ task, setInputVal }) => {
    const [, dispatchTasks] = useTasks();
    const footer = (task) => {
        // return task.countDaysLeft;
        if (task.isDone) return "✔️ Đã xong";
        if (task.countDaysLeft <= 0) return "❌ Hết hạn";
        if (task.countDaysLeft <= 1) return "⏰ Còn chưa đầy 1 ngày";
        return `Còn hơn ${Math.floor(task.countDaysLeft)} ngày nữa`;
      };
    return (
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
      )
} 