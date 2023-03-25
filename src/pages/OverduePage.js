import { Content } from "./Content";
import { useTasks } from "../stores";
const OverduePage = () => {
    const [tasks,] = useTasks();

    return (<>
        <Content tasks = {tasks.filter(task => task.isOverdue )} />
    </>)
}

export default OverduePage