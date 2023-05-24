import { useTasks } from "../stores";

import { Welcome } from "./page-components/Welcome";
import { Page } from "./Page";

// Homepage hiển thị những task chưa xong
// Homepage kế thừa Page
const HomePage = () => {
  const [tasks] = useTasks();
  return (
    <Page
      tasks={tasks.filter((task) => !task.isDeleted)}
      hasInputField
      noContent={<Welcome />}
    />
  );
};

export default HomePage;
