import { Accordion, Row, Form, Stack, Button } from "react-bootstrap";
import { InputField } from "./InputField";
import { useEffect, useState } from "react";
import "./InputAccordion.css";
import { Task, useTasks, ActionEnum } from "../../stores";
import { NotiTypes, useNoti } from "../../notification";
export const InputAccordion = ({ inputVal, setInputVal }) => {
  const [activeKey, setActiveKey] = useState("1");

  const [name, setName] = useState("");
  const [deadline, setDeadline] = useState("");
  const [note, setNote] = useState("");
  const [tasks, dispatchTasks] = useTasks();
  const [noti, dispatchNoti] = useNoti();
  const handleSubmit = (e) => {
    let id, type;
    const now = new Date();
    if (!name) dispatchNoti({
      type: NotiTypes.ADD,
      payload : {
        content: <p>Chưa nhập tên công việc</p>,
        time: now,
        link: null,
      }
    })
    // lấy id và tên
    if (inputVal === -1 && name) {
      id = tasks.length + 1;
      type = ActionEnum.ADD_TASK;

      // hiện  thông báo
      dispatchNoti({
        type: NotiTypes.ADD,
        payload: {
          content: `Đã thêm một công việc mới: ${name.toUpperCase()}`,
          link: "/mnemonic",
          time: now,
        },
      });
    } else {
      //  sửa một task
      id = inputVal;
      type = ActionEnum.CHANGE_TASK;

      // Hiện thông báo
      if (name) dispatchNoti({
        type: NotiTypes.ADD,
        payload: {
          content: `Sửa thành công: ${name.toUpperCase()}`,
          link: "/mnemonic",
          time: now,
        },
      });
    }

    // thêm task với dispatch
    dispatchTasks({
      type: type,
      payload: new Task({
        id: id,
        name: name.toUpperCase(),
        deadline: deadline,
        note: note,
        isDone: false,
        steps: 0,
        isDeleted: false,
      }),
    });

    // đưa các giá trị input về mặc định
    setName("");
    setDeadline("");
    setNote("");
    setInputVal(-1);
  };

  // khi nhấn vào nút chỉnh sửa
  useEffect(() => {
    // e.target.className += " .focused"
    if (inputVal !== -1) {
      setActiveKey("0");
      window.scrollTo(0, 0);
    }
    // setActiveKey("0");
  }, [inputVal]);

  return (
    <>
      <Accordion activeKey={activeKey} className="accordion">
        <Accordion.Item eventKey="0" className="accordion-item" >
          <Accordion.Header
            onClick={(e) => {
              setActiveKey((prevKey) => {
                if (prevKey === "1") return "0";
                return "1";
              });
            }}
            className="input-header"
            
          >
            <Stack direction="horizontal" style={{ whiteSpace: "nowrap" }}>
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
                onClick={(e) => {
                  e.stopPropagation();
                }}
                onKeyUp={(e) => {
                  // chặn đóng mở accordion khi ấn Space
                  if (e.key === " ") {
                    e.preventDefault();
                    // setActiveKey(activeKey => activeKey === "1" ? "0" : "1")
                  }

                  // enter để submit
                  if (e.key === "Enter") {
                    e.target.value.toUpperCase();
                    handleSubmit();
                  }
                }}
                onBlur={(e) => setName(e.target.value.toUpperCase())}
                required
              />
            </Stack>

            <Button
              variant="success"
              className=" submit-button"
              onClick={(e) => {
                e.stopPropagation();
                handleSubmit();
              }}
            >
              ✔
            </Button>

            {inputVal !== -1 && (
              <Button
                className=" cancel-button "
                variant="danger"
                onClick={(e) => {
                  e.stopPropagation();
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

          <Accordion.Body >
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
