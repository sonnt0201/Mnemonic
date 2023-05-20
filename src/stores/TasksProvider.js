
import { useReducer } from "react"
import { TasksContext } from "./Contexts"
import { tasksReducer } from "./tasksReducer";
import { initialTasks } from "./initialTasks";
const TasksProvider = ({children}) => {
    const [tasks, dispatchTasks] = useReducer(tasksReducer, []);
    return <TasksContext.Provider value = { [tasks, dispatchTasks] }>
        {children}
    </TasksContext.Provider>
}

export default TasksProvider