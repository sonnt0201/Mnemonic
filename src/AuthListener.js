import { useEffect } from "react";
import { auth, useUser } from "./account";
import { fetchDataFromStore } from "./manager/firestore";
import { ActionEnum, useTasks } from "./stores";
import { Navigate, useNavigate } from "react-router-dom";

export const AuthListener = () => {
  const [user, setUser] = useUser();
  const [, dispatchTasks] = useTasks();
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      
      if (user) {
        navigate("/mnemonic")
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
