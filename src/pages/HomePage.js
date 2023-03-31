import { useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import InputField from "./InputField";
import { useTasks } from "../stores";
import { Content } from "./Content";
import { CheckDeadline } from "../utils";
const InputEnum = {
  ADD_TASK: "➕ Thêm Công việc",
  CHANGE_TASK: "🖊️ Chỉnh sửa",
};
const HomePage = () => {
  const [showInput, setShowInput] = useState(false);
  const [inputState, setInputState] = useState(InputEnum.ADD_TASK);
  const [tasks,] = useTasks();
  const handleShow = () => {
    setShowInput((prevShowInput) => !prevShowInput);
  };
  return (
    <div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <div> {inputState} </div>
          </Accordion.Header>
          <Accordion.Body>
            {/* Form điền ở đây */}
            <InputField />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Content tasks = {tasks}/>
    </div>
  );
};

export default HomePage;
