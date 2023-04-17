import { Accordion } from "react-bootstrap";
import { InputField } from "./InputField";
import { useEffect, useState } from "react";

export const InputAccordion = ({
  inputVal,
  setInputVal,
}) => {
    const [activeKey, setActiveKey] = useState("0");
  useEffect(() => {
    if (inputVal !== -1) setActiveKey("0");
  }, [inputVal]);
  return (
    <>
      <Accordion
        activeKey={activeKey}
        onMouseLeave={() => {
          setActiveKey("1");
        }}
        onMouseOver={() => {
          setActiveKey("0");
        }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header
            onClick={(e) => {
              setActiveKey((prevKey) => {
                if (prevKey === "1") return "0";
                return "1";
              });
            }}
            style={{
              margin: "0",
              padding: "0",
            }}
          >
            <h6>{inputVal === -1 ? "➕ Thêm công việc" : `🖊️ Chỉnh sửa`} </h6>
          </Accordion.Header>

          <Accordion.Body>
            {/* Form điền ở đây 
            InputField là trường thêm hoặc sửa task, nếu inputVal = -1 => thêm task
            inputVal != -1, sửa task với task cần sửa có id = inputVal
            */}
            <InputField inputVal={inputVal} setInputVal={setInputVal} />
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
};
