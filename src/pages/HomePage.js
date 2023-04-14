import { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Button } from "react-bootstrap";
import InputField from "./InputField";
import { useTasks } from "../stores";
import { Content } from "./Content";

const HomePage = () => {
  
  const [inputVal, setInputVal] = useState(-1);
  const [accordionActiveKey, setAccordionActiveKey] = useState("0");
  useEffect(() => {
    if (inputVal !== -1) setAccordionActiveKey("0");
  }, [inputVal]);
  const [tasks] = useTasks();
  
  return (
    <div >
      <Accordion activeKey={accordionActiveKey}
      onMouseLeave={() => {
        setAccordionActiveKey("1");
      }}
      onMouseOver={() => {
        setAccordionActiveKey('0')
      }}
      >
        <Accordion.Item eventKey="0">
          <Accordion.Header
            onClick={(e) => {
              setAccordionActiveKey((prevKey) => {
                if (prevKey === "1") return "0";
                return "1";
              });
            }}
          >
            <h5>
              {" "}
             
              {inputVal === -1 ? "➕ Thêm công việc" : `🖊️ Chỉnh sửa`}{" "}
            </h5>
            
          </Accordion.Header>
          <Accordion.Body>
            {/* Form điền ở đây 
            InputField là trường thêm hoặc sửa task, nếu inputVal = -1 => thêm task
            inputVal != -1, sửa task với task cần sửa có id = inputVal
            */}
            <InputField inputVal={inputVal} setInputVal = {setInputVal}/>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Content tasks={tasks.filter(task => !task.isDeleted)} setInputVal={setInputVal} />
    </div>
  );
};

export default HomePage;
