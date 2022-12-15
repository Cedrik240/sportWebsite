import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login/Login';
import WorkerPanel from './components/WorkerPanel/WorkerPanel';
import TableUser from './components/Table/TableUser';
import FormUser from './components/Form/FormUser';
import { Button, Result } from 'antd';
import './App.css';

const App = () => {
  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route  exact path='/worker-panel' element={<WorkerPanel/>}>
      <Route path='rental' element={<TableUser title='Aktualne wypożyczenia'/>}/>
      <Route path="rent" element={<FormUser title='Wypożycz' buttonTitle='Wypożycz'/>} />
      <Route path="return" element={<FormUser title='Zwrot' buttonTitle='Zwrot'/>} />
      <Route path="service" element={<h1>Service</h1>} />
      <Route path="sale" element={<h1>Sale</h1>} />
      <Route path="daily-report" element={<h1>Daily report</h1>} />
    </Route>
    <Route path='*' element={
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={()=> window.location = '/'}>Back Home</Button>}
  />} />
  </Routes>
</Router>
  </>
  )
}

export default App;
