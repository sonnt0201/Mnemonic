import { useEffect } from "react";
import { auth, useUser } from "./account";
import { fetchDataFromStore, saveTasksToFirestore } from "./manager/firestore";
import { ActionEnum, useTasks } from "./stores";
import { Navigate, useNavigate } from "react-router-dom";
import { StorageEnum, saveToLocalStorage } from "./utils";

export const AuthListener = () => {
  const [user, setUser] = useUser();
  const [, dispatchTasks] = useTasks();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      saveToLocalStorage({key: StorageEnum.USER, value: user})
      if (user) {
        navigate("/mnemonic")
        fetchDataFromStore().then((data) => {
            dispatchTasks({
                type:ActionEnum.SET_TASKS,
                payload: data,
            })
        }) 
      } else {
        saveToLocalStorage({key: StorageEnum.TASKS_LIST, value: []});
      }
    });
  }, []);
  return null;
};
