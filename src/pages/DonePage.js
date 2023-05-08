
import { Page } from "./Page";
import { useTasks } from "../stores";
import { NoContent } from "../assets/icons";
const DonePage = () => {
  const [tasks] = useTasks();
  return (
    <>
      <Page 
      tasks = {tasks.filter(task => !task.isDeleted && task.isDone)}
      hasInputField={false}
      noContent={<img src={NoContent.default} />}
      />
    </>
  );
};
export default DonePage;
