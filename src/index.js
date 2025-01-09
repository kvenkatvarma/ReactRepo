import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the change here
import "jquery";
import "popper.js/dist/umd/popper";
import "bootstrap/dist/js/bootstrap";
import "bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <button className='btn btn-danger'>Hello React</button>
  </React.StrictMode>
);