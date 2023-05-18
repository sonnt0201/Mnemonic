import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { ActionEnum, useTasks } from "../../stores";

export const Checker = (task) => {

    const [checked, setChecked] = useState(task.isDone);
    const [,dispatchTasks] = useTasks();
    // useEffect(() => {
    //   setTimeout (() => {
    //     dispatchTasks({
    //       type: ActionEnum.TOGGLE_TASK,
    //       payload: task.id
    //     })
    //   }, 500)
    // }, [checked])
    return 
}