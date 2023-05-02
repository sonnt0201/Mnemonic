

import {loadFromLocalStorage, StorageEnum} from "../utils";
import { Task } from "./Task";

var data = loadFromLocalStorage({key: StorageEnum.TASKS_LIST});
 
if (!data) data = [];
export const initialTasks = data.map(task => new Task({...task}));

