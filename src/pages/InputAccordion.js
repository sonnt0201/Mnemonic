import { Accordion, Row, Form, Stack, Button } from "react-bootstrap";
import { InputField } from "./InputField";
import { useEffect, useState } from "react";
import "./InputAccordion.css";
import { useTasks, ActionEnum } from "../stores";
import { Task } from "../stores";
export const InputAccordion = ({ inputVal, setInputVal }) => {

  const [activeKey, setActiveKey] = useState("1");

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [note, setNote] = useState("");
  const [tasks, dispatchTasks] = useTasks();

  const handleSubmit = (e) => {
    
    let id, type;

    if (inputVal === -1 && name) {
      id = tasks.length + 1;
      type = ActionEnum.ADD_TASK;
    } else {
      id = inputVal;
      type = ActionEnum.CHANGE_TASK;
    }

    dispatchTasks({
      type: type,
      payload: new Task({
        id: id,
        name: name,
        deadline: deadline,
        note: note,
        isDone: false,
        steps: 0,
        isDeleted: false,
      }),
    });

    setName("");
    setDeadline("");
    setNote("");
    setInputVal(-1);
  };

  useEffect(() => {
    if (inputVal !== -1) setActiveKey("0");
  }, [inputVal]);

  return (
    <>
      <Accordion
        activeKey={activeKey}
     
        className="accordion"
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header
            onClick={(e) => {
              setActiveKey((prevKey) => {
                if (prevKey === "1") return "0";
                return "1";
              });
            }}
            className="input-header"
          >
            <Stack direction="horizontal" style={{ whiteSpace: "nowrap", }}>
              <Form.Label className="me-2 my-auto">
                {inputVal === -1 ? "➕ Thêm" : "🖊️ Sửa"}
              </Form.Label>
              <Form.Control
                type="text"
                autoComplete="off"
                placeholder="Tên công việc"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                onBlur={(e) => setName(e.target.value.toUpperCase())}
                required
              />
            </Stack>

            <Button
              variant="success"
              className=" submit-button"
              onClick={handleSubmit}
            >
              ✔
            </Button>

            {inputVal !== -1 && (
              <Button
                className=" cancel-button "
                variant="danger"
                onClick={(e) => {
                  setName("");
                  setDeadline("");
                  setNote("");
                  setInputVal(-1);
                  setActiveKey(1);
                }}
              >
                ✘
              </Button>
            )}
          </Accordion.Header>

          <Accordion.Body>
            {/* Form điền ở đây 
            InputField là trường thêm hoặc sửa task, nếu inputVal = -1 => thêm task
            inputVal != -1, sửa task với task cần sửa có id = inputVal
            */}
            <InputField
              inputVal={inputVal}
              setInputVal={setInputVal}
              name={name}
              setName={setName}
              deadline={deadline}
              setDeadline={setDeadline}
              note={note}
              setNote={setNote}
            />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
