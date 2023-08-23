import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Resume from './components/pages/Resume';
import Coffee from './components/pages/Coffee';

function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/services' Component={Services} />
          <Route path='/resume' Component={Resume} />
          <Route path='/coffee' Component={Coffee} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
