import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect, useState } from "react";
import { Task } from "../stores/Task";
import { useTasks } from "../stores/Contexts";
import { ActionEnum } from "../stores";

export const InputField = ({
  inputVal,
  setInputVal,
  name,
  setName,
  deadline,
  setDeadline,
  note,
  setNote,
  handleSubmit
}) => {
  const [tasks, dispatchTasks] = useTasks();

  useEffect(() => {
    if (inputVal === -1) return;
    const placeholderTask = tasks.find((task) => task.id === inputVal);
    setName(placeholderTask.name);
    setNote(placeholderTask.note);
    setDeadline(placeholderTask.deadline);
  }, [inputVal]);

  

 
  return (
    <Form style={{ textAlign: "left" }}>
      <Row className="mb-3">
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

    

      
    </Form>
  );
};

export default InputField;
