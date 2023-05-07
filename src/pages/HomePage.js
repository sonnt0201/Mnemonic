import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTasks } from "../stores";
import { Item } from "./Item";
import { InputAccordion } from "./InputAccordion";
import { Welcome } from "./Welcome";
const HomePage = () => {
  const [inputVal, setInputVal] = useState(-1);
  const [tasks] = useTasks();

  const [content, setContent] = useState([]);
  useEffect(()=> {
    setContent(tasks.filter(task => !task.isDeleted));
    console.log(content)
  },[tasks])

  return (
    <>
      <InputAccordion inputVal={inputVal} setInputVal={setInputVal} />

      <Container className="content">
        <Row>
          {content.map((task) => 
             <Item task={task} setInputVal={setInputVal} />
          )}

          {
          // (content === []) &&
           <Welcome />}
        </Row>
      </Container>
    </>
  );
};

export default HomePage;
