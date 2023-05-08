import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { Item } from "./Item";
import { InputAccordion } from "./InputAccordion";
import { Welcome } from "./Welcome";
import "./Page.css";
// tất cả các page khác kế thừa Page Component
// hasInputField === true => hiện input field để thêm hoặc sửa và ngược lại
// noContent là Component hiển thị khi không có task nào được truyền vào

export const Page = ({ tasks, hasInputField, noContent }) => {
  // inputVal === -1 => thêm task,
  // inputVal !== -1 đang sửa task có id = inputVal
  const [inputVal, setInputVal] = useState(-1);

  // useEffect(() => {
  //     console.log(tasks);
  // },[])

  return (
    <>
      {hasInputField && (
        <InputAccordion inputVal={inputVal} setInputVal={setInputVal} />
      )}

      <Container className="content">
        <Row>
          {/* trường hợp có task để hiển thị */}
          <h6 className="content-header">
            {tasks.length > 0 && tasks.length + `  công việc`}
          </h6>

          {tasks.map((task) => (
            <Item task={task} setInputVal={setInputVal} />
          ))}

          <div className="no-content">
            {tasks.length === 0 ? noContent : ""}
          </div>
        </Row>
      </Container>
    </>
  );
};
