

import { useState } from "react";
import { Page } from "./Page";
import { NoContent } from "../assets/icons";
import { useTasks } from "../stores";
const PendingPage = () => {
  
  const [tasks] = useTasks()
  return (
    <>
      <Page
      tasks={tasks.filter(task => !task.isDeleted && !task.isDone && task.countDaysLeft > 0 )}
      hasInputField
      noContent={<img src={NoContent.default}/> }
      />
    </>
  );
};

export default PendingPage;
