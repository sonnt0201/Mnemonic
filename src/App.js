
import './App.css';
import MainNavbar  from './MainNavbar';
import {Routes, Route} from 'react-router-dom'
import { DonePage, HomePage, OverduePage, PendingPage, DeletedPage, ChatPage } from './pages';
import { useEffect } from 'react';
import { useTasks } from './stores';
import {ActionEnum} from './stores'
const TIME = 1000;
function App() {
  const [tasks, dispatchTasks] = useTasks();
  // useEffect để gọi bộ đếm, đếm mỗi phút
  useEffect(() => {
    const checker = setInterval(() => {
      
      const now = new Date();
      // chạy checker ở useEffect để có thể hủy bộ đến khi app unmount
      dispatchTasks({
        type: ActionEnum.COUNT_DAYS_LEFT,
        payload: now
      })
    }, TIME);

    return () => clearInterval(checker);
  }, [tasks, dispatchTasks]);
  return (
    <div className="App">
      <MainNavbar/>
      <Routes>
        <Route path='/mnemonic' element = {<HomePage/>} />
        <Route path='/mnemonic/done-page' element = {<DonePage/>} />
        <Route path='/mnemonic/pending-page' element = {<PendingPage/>} />
        <Route path='/mnemonic/overdue-page' element = {<OverduePage/>} />
        <Route path='/mnemonic/deleted-page' element = {<DeletedPage/>} />
        <Route path='/mnemonic/chatgpt' element = {<ChatPage/>}/>
      </Routes>

    

    </div>
  );
}

export default App;
