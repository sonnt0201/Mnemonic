

import {loadFromLocalStorage, StorageEnum} from "../utils";
import { Task } from "./Task";

var data = loadFromLocalStorage({key: StorageEnum.TASKS_LIST});
    console.log(!data);
if (!data) data = [];
export const initialTasks = data.map(task => new Task({...task}));

