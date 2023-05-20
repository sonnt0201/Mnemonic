import {
  getFirestore,
  collection,
  doc,
  setDoc,
  getDoc,
} from "firebase/firestore";
import { app } from "../account/app";
import { auth } from "../account/app";
import { Task } from "../stores";

export const firestore = getFirestore(app);
const collectionRef = collection(firestore, "user-tasks");

const addNewUserToStore = async (uid) => {
  try {
    const data = "[]";
    // set dữ liệu người dùng
    await setDoc(doc(firestore, "user-tasks", auth.currentUser.uid), { data });
  } catch (error) {
    console.log(error.message);
    // const data = JSON.stringify(tasks);
    // console.log(data);
  }
};

const saveTasksToStore = async (tasks) => {
  try {
    let data = JSON.stringify(tasks);

    // console.log(data);
    await setDoc(doc(firestore, "user-tasks", auth.currentUser.uid), { data });
  } catch (error) {
    console.log(error.message);
  }
};

const fetchDataFromStore = async () => {
  let tasks;
  try {
    const docSnap = await getDoc(
      doc(firestore, "user-tasks", auth.currentUser.uid)
    );
    const data = docSnap.get("data");
    tasks = JSON.parse(data).map(task => new Task({...task}));
    return tasks;
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export { saveTasksToStore, fetchDataFromStore, addNewUserToStore };
