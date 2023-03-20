import { useEffect } from "react";
import { ActionEnum, useTasks } from "../stores";
const TIME = 60*1000;

export const CheckDeadline = () => {
  const [tasks, dispatchTasks] = useTasks();
  useEffect(() => {
    const checker = setInterval(() => {
      const now = new Date();
      tasks.forEach((task) => {
        const deadline = new Date(task.deadline).getTime();
        // console.log(deadline <= now);
        if (!task.isDone && deadline <= now) {
          console.log(`${task.name} hết giờ`);
          dispatchTasks({ type: ActionEnum.TOGGLE_TASK, payload: task.id });
        }
      });
    }, TIME);

    return () => clearInterval(checker);
  }, [tasks]);
  return null;
};
