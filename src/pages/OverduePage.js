import { Content } from "./Content";
import { useTasks } from "../stores";
const OverduePage = () => {
    const [tasks,] = useTasks();

    return (<>
        <Content tasks = {tasks.filter(task => !task.isDeleted && task.countDaysLeft <= 0 && task.isDone === false )} />
    </>)
}

export default OverduePage