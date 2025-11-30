/**
 * Import the required React functions as well as the App function from App.js
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
/**
 * Render the App function to the page, using React.StrictMode to make it easier to find bugs
 */
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
