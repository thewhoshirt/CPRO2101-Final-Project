import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Home from './pages';
import Contact from './pages/contact';
import About from './pages/about.js';
// import Pre-Order from ''

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/per-order' element={<Pre-Order/>}/> */}

      </Routes>
    </Router>

  );
}

export default App;
