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
import PreorderForm from './pages/preorder-form.js'
import Menu from './pages/menu.js';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pre-order' element={<PreorderForm/>}/>

      </Routes>
    </Router>

  );
}

export default App;
