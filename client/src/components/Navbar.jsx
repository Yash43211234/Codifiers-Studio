// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const aboutDropdownRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
    }
  };

  const handleDropdownClick = () => {
    if (window.innerWidth <= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleLinkClick = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuOpen(false);
    setDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  const openAboutDropdown = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsAboutDropdownOpen(true);
    }
  };

  const closeAboutDropdown = () => {
    if (window.innerWidth > 768) {
      timeoutRef.current = setTimeout(() => setIsAboutDropdownOpen(false), 200);
    }
  };

  const toggleAboutDropdown = () => {
    if (window.innerWidth <= 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsAboutDropdownOpen((prev) => !prev);
    }
  };

  const closeAboutDropdownOnClick = () => {

    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setMenuOpen(false);
    setDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target)
      ) {
        timeoutRef.current = setTimeout(() => setDropdownOpen(false), 200);
      }

      if (
        aboutDropdownRef.current && !aboutDropdownRef.current.contains(event.target)
      ) {
        timeoutRef.current = setTimeout(() => setIsAboutDropdownOpen(false), 200);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <nav className="navbar">
      <Link to="/" className="brand" onClick={handleLinkClick}>
        <img src="tcs.png" alt="theChordifiersStudio" />
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={handleLinkClick}>Home</Link>
        <Link to="/institute" className="nav-item" onClick={handleLinkClick}>Institute</Link>
        <a href="https://theone11.show/" className="nav-item" target="_blank" rel="noopener noreferrer" onClick={handleLinkClick}>The One11 Show</a>

        <div className="nav-item dropdown" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={handleDropdownClick}>
          <span
            onClick={() => navigate('/services')}
            className="dropdown-toggle"
          >
            Services
          </span>

          <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
            <Link to="/pro-music-production" className="dropdown-item" onClick={handleLinkClick}>Pro Music Composition</Link>
            <Link to="/pro-audio-recording" className="dropdown-item" onClick={handleLinkClick}>Pro Audio Recording</Link>
            <Link to="/pro-audio-editing" className="dropdown-item" onClick={handleLinkClick}>Pro Audio Editing & Arrangement</Link>
            <Link to="/pro-sound-design" className="dropdown-item" onClick={handleLinkClick}>Pro Sound Design</Link>
            <Link to="/pro-audio-mixing" className="dropdown-item" onClick={handleLinkClick}>Pro Audio Mixing</Link>
            <Link to="/pro-audio-mastering" className="dropdown-item" onClick={handleLinkClick}>Pro Audio Mastering</Link>
            <Link to="/upcoming" className="dropdown-item" onClick={handleLinkClick}>Music Distribution</Link>
            <Link to="/video-production" className="dropdown-item" onClick={handleLinkClick}>Video Production</Link>
            <Link to="/music-production" className="dropdown-item" onClick={handleLinkClick}>Music Promotion</Link>
            <Link to="/artist-management" className="dropdown-item" onClick={handleLinkClick}>Artist Management</Link>
          </div>
        </div>

        <Link to="/upcoming" className="nav-item" onClick={handleLinkClick}>Record Label</Link>

        <div className="nav-item dropdown" ref={aboutDropdownRef} onMouseEnter={openAboutDropdown} onMouseLeave={closeAboutDropdown} onClick={toggleAboutDropdown}>
          <span onClick={() => navigate('/about')} className="dropdown-toggle">About Us</span>
          <div className={`dropdown-menu about-dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
            {/* <HashLink smooth to="/about#about-section" className="dropdown-item about-dropdown-item"  onClick={closeAboutDropdownOnClick}>

            </HashLink> */}
            <HashLink smooth to="/about#our-stories" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>
              Our Story
            </HashLink>
            <HashLink smooth to="/about#our-gallery" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>
              Gallery
            </HashLink>
            <HashLink smooth to="/about#our-location" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>
              Visit us
            </HashLink>
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>☰</div>
    </nav>
  );
}
