import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useEffect } from "react";
import { useTasks } from "../../stores";


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

      <Row >
        <Form.Group xs={12} md={6} as={Col} controlId="formGridPassword">
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
        <Form.Group className="mt-3" as={Col} controlId="formGridEmail">
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

<Row>
  </Row>    

      
    </Form>
  );
};

export default InputField;
