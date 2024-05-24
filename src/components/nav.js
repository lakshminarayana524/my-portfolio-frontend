import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './styles/nav.css';

const Nav = () => {
  const [toggle, setToggle] = useState(false);

  const toggleDropdown = () => {
    if (window.innerWidth <= 900) {
      setToggle(!toggle);
    }
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 900) {
        setToggle(false);
      }
    }
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='nav-container'>
      <div className='menu-icon' onClick={toggleDropdown}>
        &#9776;
      </div>
      <ul className={`navbar ${toggle ? 'show' : ''}`}>
        <li><NavLink to="/" onClick={() => setToggle(false)}>Home</NavLink></li>
        <li><NavLink to="/projects" onClick={() => setToggle(false)}>Projects</NavLink></li>
        <li><NavLink to="/about" onClick={() => setToggle(false)}>About</NavLink></li>
        <li><NavLink to="/contact" onClick={() => setToggle(false)}>Contact</NavLink></li>
      </ul>
      <div className={`dropdown-container ${toggle ? 'show' : ''}`} >
        <ul>
          <li><NavLink to="/" onClick={() => setToggle(false)}>Home</NavLink></li>
          <li><NavLink to="/projects" onClick={() => setToggle(false)}>Projects</NavLink></li>
          <li><NavLink to="/about" onClick={() => setToggle(false)}>About</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setToggle(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
