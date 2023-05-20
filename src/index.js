import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { TasksProvider, useTasks } from "./stores";
import { NotiProvider } from "./notification";
import { UserProvider } from "./account/UserProvider";

// firebase
import { auth } from "./account";
import { fetchDataFromStore } from "./manager/firestore";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <NotiProvider>
          <TasksProvider>
            <App />
          </TasksProvider>
        </NotiProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsconsole.log(firebase.userCredential);
reportWebVitals();


