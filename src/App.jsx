import { useState } from "react";
import { Card } from "./components/Card";
import "./App.css";
import Header from "./components/header";
import Dashboard from "./components/dashborad";
import About from "./components/about";
import Home from "./components/home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    
    <Header />
    <Routes>
      <Route path="/" element={<Dashboard/>} />
      <Route path="/About" element={<About />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Home" element={<Home />} />
    </Routes>

</>
  );
}

export default App;
