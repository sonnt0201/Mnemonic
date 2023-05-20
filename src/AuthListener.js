import { useEffect } from "react";
import { auth, useUser } from "./account";
import { fetchDataFromStore } from "./manager/firestore";
import { ActionEnum, useTasks } from "./stores";

export const AuthListener = () => {
  const [user, setUser] = useUser();
  const [, dispatchTasks] = useTasks();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);

      if (user) {
        fetchDataFromStore().then((data) => {
            dispatchTasks({
                type:ActionEnum.SET_TASKS,
                payload: data,
            })
        });
      }
    });
  }, []);
  return null;
};
