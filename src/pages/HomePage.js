import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useTasks } from "../stores";
import { Item } from "./Item";
import { InputAccordion } from "./InputAccordion";
import { Welcome } from "./Welcome";
import { Page } from "./Page";

// Homepage hiển thị những task chưa xong
// Homepage kế thừa Page
const HomePage = () => {
  const [tasks] = useTasks();
  return (
    <Page
      tasks={tasks.filter(
        (task) => !task.isDeleted && !task.isDone && task.countDaysLeft > 0
      )}

      hasInputField

      noContent = {<Welcome/>}
    />
  );
};

export default HomePage;
