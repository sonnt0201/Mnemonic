import { useTasks } from "../stores";

import { Welcome } from "./page-components/Welcome";
import { Page } from "./Page";
import { useUser } from "../account";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// Homepage hiển thị những task chưa xong
// Homepage kế thừa Page
const HomePage = () => {
  const [tasks] = useTasks();
  const [user] = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (user) navigate("/mnemonic") ; else  navigate("/mnemonic/signin")
    // if (user ) dispatchTasks({type: ActionEnum.FETCH, payload: null})
  }, []);
  return (
    <Page
      tasks={tasks.filter((task) => !task.isDeleted)}
      hasInputField
      noContent={<Welcome />}
    />
  );
};

export default HomePage;
