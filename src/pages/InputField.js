import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Task } from "../stores/Task";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";

export const InputField = ({ inputVal, setInputVal }) => {
  const [tasks, dispatchTasks] = useTasks();

  useEffect(() => {
    if (inputVal === -1) return;
    const placeholderTask = tasks.find((task) => task.id === inputVal);
    setName(placeholderTask.name);
    setNote(placeholderTask.note);
    setDeadline(placeholderTask.deadline);
  }, [inputVal]);

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [note, setNote] = useState("");
  return (
    <Form style={{ textAlign: "left" }}>
      <Row className="mb-3">
        {/* ĐIỀN TÊN CÔNG VIỆC */}
        <Form.Group as={Col} controlId="formGrid">
          <Form.Label>Tên công việc</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên công việc"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={(e) => setName(e.target.value.toUpperCase())}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          {/* ĐIỀN NGÀY THÁNG */}
          <Form.Label>Hạn chót (MM/DD/YYYY)</Form.Label>
          <Form.Control
            type="datetime-local"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Ghi chú</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Ghi chú"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Button variant="outline-primary" className="me-3">
            Thêm bước
          </Button>
          <Button variant="outline-danger">Xóa bước</Button>

          <Button
            style={{
              marginLeft: "25%",
              
            }}
            variant="outline-success"
            onClick={(e) => {
              if (inputVal === -1 && name)
                dispatchTasks({
                  type: ActionEnum.ADD_TASK,
                  payload: new Task({
                    id: tasks.length + 1,
                    name: name,
                    deadline: deadline,
                    note: note,
                    isDone: false,
                    steps: 0,
                    isDeleted : false
                  }),
                });
              else {
                dispatchTasks({
                  type: ActionEnum.CHANGE_TASK,
                  payload: new Task({
                    id: inputVal,
                    name: name,
                    deadline: deadline,
                    note: note,
                    isDone: false,
                    steps: 0,
                    isDeleted : false
                  }),
                });
              }

              setName("");
              setDeadline("");
              setNote("");
              setInputVal(-1);
            }}
          >
            Hoàn thành
          </Button>

            {
              (inputVal !== -1) &&
              <Button className="cancel-button ms-3"
           variant="danger"
            style={{
              marginRight: "20%"
            }}

            onClick={ e => {
              setName("");
              setDeadline("");
              setNote("");
              setInputVal(-1);
              
            }}
            >Hủy</Button>
            }
          
        </Form.Group>
      </Row>
    </Form>
  );
};

export default InputField;
