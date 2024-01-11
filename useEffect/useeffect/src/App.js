
import './App.css';
// import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import Home from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';



function App() {


  return (
    <div className="App">
  
      <Router>
        <div>
        <Header />
        <div className='h1'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
        </div>
        </div>
      </Router>

     

    </div>
  );
}

export default App;
