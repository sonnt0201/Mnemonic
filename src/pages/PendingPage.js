 import { Content } from "./Content";
 import { useTasks } from "../stores";
 const PendingPage = () => {
    const [tasks,] = useTasks();
    return (<>
        <Content tasks = {tasks.filter(task => (task.isDone === false && task.isOverdue === false)) }/>
    </>)
}

export default PendingPage