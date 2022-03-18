import React from "react";
import Navbar from "./Components/Navbar";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Education from "./Pages/Education/Education";
import Experience from "./Pages/Experience/Experience";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/experience" element={<Experience/>}/>
      <Route path="/profile" element={<Profile/>}/>
    </Routes>
    </Router>
    
    </>
  );
}

export default App;
