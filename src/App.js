import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
//import Home from './components/Home';
import DoctorDetails from './components/AboutDoctor';
import Home from './components/Home.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
      </Routes>
    </Router>
  );
}

export default App;