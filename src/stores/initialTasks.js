import { auth } from "../account";
import { fetchDataFromStore } from "../manager/firestore";
import { Task } from "./Task";
// import {collection} from "firebase/firestore";
// import { collectionRef } from "./firestore";
// var data;
// if (auth.user) {
//    data = fetchDataFromStore();

//   if (!data) data = [];
 
// } else {
//     data = [];
// }
export const initialTasks = [];
// fetchDataFromStore().then(tasks => {
//     console.log(tasks)
//     tasks.map((task) => new Task({ ...task }))
// })

// .map((task) => new Task({ ...task }));
// data.map((task) => new Task({ ...task }));