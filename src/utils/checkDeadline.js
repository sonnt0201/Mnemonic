import { useEffect } from "react";
import {ActionEnum, useTasks } from "../stores";
const TIME =  1000;

export const CheckDeadline = () => {
  const [tasks, dispatchTasks] = useTasks();
  useEffect(() => {
    const checker = setInterval(() => {
      const now = new Date();
      tasks.forEach((task) => {
        const deadline = new Date(task.deadline).getTime();
        // console.log(deadline <= now);
        if ( deadline <= now) {
          dispatchTasks({
            type: ActionEnum.SET_OVERDUE,
            payload: task.id
          })
        } 
      });
    }, TIME);

    return () => clearInterval(checker);
  }, [tasks, dispatchTasks]);
  return null;
};
