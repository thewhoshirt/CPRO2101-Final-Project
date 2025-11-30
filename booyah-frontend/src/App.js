import React from 'react'; // import React
import './App.css'; // import the styles from App.css
/**
 * Import the routing functions from React
 */
import {
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
/**
 * Import the custome pages and navbar/footer components
 */
import Home from './pages';
import Contact from './pages/contact';
import About from './pages/about.js';
import PreorderForm from './pages/preorder-form.js'
import Menu from './pages/menu.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
function App() {
  return (
    /**
     * Wrap the program in the router so that all of the pages are available
     */
    <Router>
      <Navbar /> {/* put the navbar at the top of the page */}
      {/**
       * Configure the routes to all of the pages
       */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pre-order' element={<PreorderForm/>}/>
      </Routes>
      <Footer /> {/* put the footer at the bottom of the page */}
    </Router>
  );
}
export default App;