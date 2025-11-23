import React from 'react';
import './App.css';
import Navbar from './components/NavBar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Home from './pages';
import Contact from './pages/contact';
import About from './pages/about.js';





function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />

      </Routes>
    </Router>

    // <div className="App">
    //   <header className="App-header">
    //     <h1>Booyah Bagels</h1>
    //     </header>
    // </div>
  );
}

export default App;
