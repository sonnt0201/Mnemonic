import { saveToLocalStorage, StorageEnum } from "../utils";
import ActionEnum from "./ActionEnum";
import { Task } from "./Task";

import { fetchDataFromStore, saveTasksToStore } from "../manager/firestore";


export const tasksReducer = (tasks, action) => {
  // tasks list sau khi thay đổi

  let newTasks = tasks;
  switch (action.type) {
    case ActionEnum.SET_TASKS: 
      newTasks = action.payload;
      
      return newTasks
      
     

    case ActionEnum.ADD_TASK: // payload is object
      newTasks = [action.payload, ...tasks];

      break;
    case ActionEnum.TOGGLE_DELETED: // payload is id
      newTasks = tasks.map((task) => {
        if (task.id !== action.payload) return task;
        return new Task({ ...task, isDeleted: !task.isDeleted });
      });
      break;

    case ActionEnum.REMOVE_TASK: // payload is id
      newTasks = tasks
        .filter(
          (
            task // xóa task được chọn
          ) => task.id !== action.payload
        )
        .map((task, index) => {
          // đánh số lại id
          return new Task({ ...task, id: index + 1 });
        });
      break;
    case ActionEnum.TOGGLE_TASK: //payload is id
      newTasks = tasks.map((task) => {
        if (task.id !== action.payload) return task;
        return new Task({ ...task, isDone: !task.isDone });
      });
      break;

    // thay đổi 1 task
    case ActionEnum.CHANGE_TASK: // payload is an object
      newTasks = tasks.map((task) => {
        if (task.id !== action.payload.id) return task;
        return action.payload;
      });
      break;

    // check quá hạn
    case ActionEnum.COUNT_DAYS_LEFT:
      // set UPDATE  chạy trên tất cả các tasks
      // payload = now

      newTasks = tasks.map((task) => {
        task.update();
        return task;
      });
      break;

    case ActionEnum.EMPTY_BIN:
      newTasks = tasks.filter((task) => !task.isDeleted);
      break;
    default:
      newTasks = tasks;
      break;
  }

  // không cần đếm ngày vì khi lấy dữ liệu lần đầu từ backend sẽ có đếm ngày
  if (action.type !== ActionEnum.COUNT_DAYS_LEFT && action.type !== ActionEnum.FETCH)
    saveTasksToStore( newTasks);
  // console.log(newTasks);
    // saveToLocalStorage({ key: StorageEnum.TASKS_LIST, value: newTasks });
  return newTasks;
};
