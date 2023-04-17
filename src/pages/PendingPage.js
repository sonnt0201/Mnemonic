import { Container, Row } from "react-bootstrap";
import { useState } from "react";
import { Item } from "./Item";
import { InputAccordion } from "./InputAccordion";
import { useTasks } from "../stores";
const PendingPage = () => {
  const [inputVal, setInputVal] = useState(-1);
  const [tasks] = useTasks();
  return (
    <>
      <InputAccordion inputVal={inputVal} setInputVal={setInputVal} />
      <Container className="content">
        <Row>
          {tasks.map(
            (task) =>
              !task.isDeleted &&
              !task.isDone &&
              task.countDaysLeft >= 0 && (
                <Item task={task} setInputVal={setInputVal} />
              )
          )}
        </Row>
      </Container>
    </>
  );
};

export default PendingPage;
