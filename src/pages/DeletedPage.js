import { DeletedContent } from "./DeletedContent";
import { useTasks } from "../stores";
const DeletedPage = () => {
    const [tasks,] = useTasks();
    return (<>
        <DeletedContent tasks = {tasks.filter(task => task.isDeleted)}/>
        
    </>)
}
export default DeletedPage