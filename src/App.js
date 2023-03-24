import logo from './logo.svg';
import './App.css';
import MainNavbar  from './MainNavbar';
import {Routes, Route} from 'react-router-dom'
import { DonePage, HomePage, OverduePage, PendingPage } from './pages';
import { useEffect } from 'react';
function App() {
  // useEffect để gọi bộ đếm, đếm mỗi phút
  useEffect(() => {
    
  })
  return (
    <div className="App">
      <MainNavbar/>
      <Routes>
        <Route path='/' element = {<HomePage/>} />
        <Route path='/done-page' element = {<DonePage/>} />
        <Route path='/pending-page' element = {<PendingPage/>} />
        <Route path='/overdue-page' element = {<OverduePage/>} />
      </Routes>
    </div>
  );
}

export default App;
