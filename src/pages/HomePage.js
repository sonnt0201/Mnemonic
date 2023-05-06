import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTasks } from "../stores";
import { Item } from "./Item";
import { InputAccordion } from "./InputAccordion";
import { Welcome } from "./Welcome";
const HomePage = () => {
  const [inputVal, setInputVal] = useState(-1);
  const [tasks] = useTasks();

  const Content = () =>
    tasks.map((task) => {
      if (task.isDeleted) return "";
      return <Item task={task} setInputVal={setInputVal} />;
    });


  return (
    <>
      <InputAccordion inputVal={inputVal} setInputVal={setInputVal} />

      <Container className="content">
        <Row>
          {tasks.map((task) => {
            if (task.isDeleted) return "";
            return <Item task={task} setInputVal={setInputVal} />;
          })}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
