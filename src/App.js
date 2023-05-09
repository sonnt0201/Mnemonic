import "./App.css";
import MainNavbar from "./MainNavbar";
import { Routes, Route } from "react-router-dom";
import {
  DonePage,
  HomePage,
  OverduePage,
  OverallPage,
  DeletedPage,
  ChatPage,
  LoginPage,
} from "./pages";
import { useEffect } from "react";
import { useTasks, ActionEnum } from "./stores";
import { ToastNoti } from "./ToastNoti";
import { useNoti, NotiTypes } from "./notification";
import { DownloadButton } from "./DownloadButton";


const TIME = 60*1000; // thời gian giữa các lần update countDaysLeft
function App() {
  const [tasks, dispatchTasks] = useTasks();

  // useEffect để gọi bộ đếm, đếm mỗi phút
  useEffect(() => {
    const checker = setInterval(() => {
      const now = new Date();
      // chạy checker ở useEffect để có thể hủy bộ đếm khi app unmount
      dispatchTasks({
        type: ActionEnum.COUNT_DAYS_LEFT,
        payload: now,
      });
    }, TIME);

    return () => clearInterval(checker);
  }, []); // chỉ chạy lần đầu render

 
  return (
    <div className="App">
      <MainNavbar />
      <Routes>
        <Route path="/mnemonic/" element={<HomePage />} />
        <Route path="/mnemonic/done-page" element={<DonePage />} />
        <Route path="/mnemonic/overall-page" element={<OverallPage />} />
        <Route path="/mnemonic/overdue-page" element={<OverduePage />} />
        <Route path="/mnemonic/deleted-page" element={<DeletedPage />} />
        <Route path="/mnemonic/chatgpt" element={<ChatPage />} />
        <Route path="/mnemonic/login" element={<LoginPage />} />
      </Routes>

      <ToastNoti />

      {/* <DownloadButton/> */}
    </div>
  );
}

export default App;
