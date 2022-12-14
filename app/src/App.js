import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login/Login';
import WorkerPanel from './components/WorkerPanel/WorkerPanel';
import './App.css';

const App = () => {
  return (
    <>
<Router>
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path='/worker-panel' element={<WorkerPanel/>}>
      <Route path="rent" element={<h1>Wypożycz</h1>} />
      <Route path="return" element={<h1>Zwróć</h1>} />
      <Route path="service" element={<h1>Service</h1>} />
      <Route path="sale" element={<h1>Sale</h1>} />
      <Route path="daily-report" element={<h1>Daily report</h1>} />
    </Route>
  </Routes>
</Router>
  </>
  )
}

export default App;
