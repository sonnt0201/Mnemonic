
import { Page } from "./Page";
import { useTasks } from "../stores";
import { NoContent } from "../assets/icons";
const OverduePage = () => {
  const [tasks,] = useTasks();

  return (
    <Page
    tasks = {tasks.filter(task => 
      !task.isDeleted && !task.isDone && task.countDaysLeft <= 0)}

    hasInputField={false}
    noContent={<img src={NoContent.default} alt="no-content" />}
    />
  );
};

export default OverduePage;
