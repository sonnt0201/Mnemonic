
import  ActionEnum  from "./ActionEnum"
import { Task } from "./Task";
export const tasksReducer = (tasks, action) => {
    switch (action.type) {
        case ActionEnum.ADD_TASK : // payload is object
        return [
            ...tasks, 
            action.payload,
        ];
        case ActionEnum.REMOVE_TASK: // payload is id
        return tasks.filter(task => // xóa task được chọn
            task.id !== action.payload
            ).map((task, index) => { // đánh số lại id
                return new Task({...task, id: index + 1})
            });
        case ActionEnum.TOGGLE_TASK: //payload is id
        return tasks.map(task => {
            if (task.id !== action.payload) return task;
            return new Task({...task, isDone: !task.isDone});
        });
        case ActionEnum.CHANGE_TASK: // payload is an object
        return tasks.map(task => {
            if (task.id !== action.payload.id) return task;
            return action.payload;
        })
        default: return tasks
    }
}