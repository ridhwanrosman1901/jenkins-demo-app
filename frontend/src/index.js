import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import FormPage from './FormPage';
import DataPage from './DataPage';

ReactDOM.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route path="/form" element={<FormPage />} />
      <Route path="/data" element={<DataPage />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
