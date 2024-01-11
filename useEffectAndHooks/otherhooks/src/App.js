
import './App.css';
// import React,{useState,useEffect} from "react";
import Header from "./components/Header";
import {BrowserRouter as Router,Routes, Route,Link} from "react-router-dom";
import Home from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import Instagram from './components/Instagram';
import Facebook from './components/Facebook';
import { UserDetails } from './components/UserDetails';
function App() {


  return (
    <div className="App">
  
      <Router>
        <div>
        <Header />
        <div className='h1'>
        <Routes>
          {/**index route */}
          <Route path="/">
          <Route index element={<Home />} />
          <Route path="/app" element={<Home />} />
          <Route path="/app/:userId" element={<UserDetails />}></Route>
          {/**dynamic route */}
         
          </Route>
          
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} >
            <Route path="insta" element={<Instagram />}></Route>
            <Route path="facebook" element={<Facebook />}></Route>
            {/**nested route */}
          </Route>
        </Routes>
        </div>
        </div>
      </Router>

     

    </div>
  );
}

export default App;
