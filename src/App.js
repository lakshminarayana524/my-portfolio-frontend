import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home';
import Nav from './components/nav';
import Projects from './components/projects';
import About from './components/about';
import Contact from './components/contact';
import Addprojects from './components/addprojects';
import Manage from './components/Manage_Projects';
import './App.css'; // Import CSS file for global styles

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(location.pathname === '/');

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location.pathname]);

  return (
    <div className={`App ${isHomePage ? 'home-page' : ''}`}>
      <Nav className="Nav" style={{ color: 'white', backgroundColor: "#333" }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/addprojects" element={<Addprojects />} />
        <Route path="/manage_pro" element={<Manage />} />
      </Routes>
    </div>
  );
}

export default App;
