import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { Task } from "../stores/Task";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";
const InputField = ({ inputState }) => {
  const [name, setName] = useState('');
  const [deadline, setDeadline] = useState('');
  const [note, setNote] = useState('');
  const [tasks, dispatchTasks] = useTasks();
  return (
    <Form style={{ textAlign: "left" }}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGrid">
          <Form.Label>Tên công việc</Form.Label>
          <Form.Control
            type="text"
            placeholder="Tên công việc"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Hạn chót (MM/DD/YYYY)</Form.Label>
          <Form.Control
            type="datetime-local"
            value={deadline}
            onChange={(e) => {
              setDeadline(e.target.value);
            }}
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
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
        </Form.Group>
      </Row>

      <Row className="mb-3" style={{ textAlign: "center" }}>
        <Form.Group as={Col} controlId="formGridEmail">
          <Button
            variant="outline-success"
            onClick={(e) => {
              dispatchTasks({
                type: ActionEnum.ADD_TASK,
                payload: new Task({
                  id: tasks.length + 1,
                  name: name,
                  deadline: deadline,
                  note: note,
                  isDone: false,
                  steps: 0
                }),
              });
              console.log(tasks);
            }}
          >
            Hoàn thành
          </Button>
        </Form.Group>
      </Row>
    </Form>
  );
};

export default InputField;
