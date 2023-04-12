import { Content } from "./Content";
import { useTasks } from "../stores";
const DonePage = () => {
    const [tasks,] = useTasks();
    return (<>
        <Content tasks = {tasks.filter(task => (!task.isDeleted && task.isDone))}/>
        
    </>)
}
export default DonePage