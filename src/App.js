import React from 'react';

//import Navbar from "./Components/Navbar";
import './styles/App.scss';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Navbar from './components/Navbar';


import ResumePage from "./Pages/ResumePage";

const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/resumepage' element={<ResumePage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
