import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBarComp from './MyComponents/NavBarComp';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './MyComponents/Home';
import About from './MyComponents/About';
import Contact from './MyComponents/Contact';

function App() {
  return (
    <Router>
      <NavBarComp/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
      </Routes>
    </Router>
  );
}

export default App;
