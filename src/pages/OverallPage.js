
import { useState } from "react";
import { Page } from "./Page";
import { NoContent } from "../assets/icons";
import { useTasks } from "../stores";
const OverallPage = () => {
  const [inputVal, setInputVal] = useState(-1);
  const [tasks] = useTasks()
  return (
    <>
      <Page
      tasks={tasks.filter(task => !task.isDeleted)}
      hasInputField
      noContent={<img src={NoContent.default}/> }
      />
    </>
  );
};

export default OverallPage;
