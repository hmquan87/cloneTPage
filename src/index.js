import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/home/App';
import Login from './pages/login/login';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Routes> 
        <Route exact path="/" element={<App />} />
        <Route path="/login" element={<Login />} /> 
      </Routes>
    </React.StrictMode>
  </Router>,
  document.getElementById('root')
);
reportWebVitals();
