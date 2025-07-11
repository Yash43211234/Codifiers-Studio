// Navbar.jsx
import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const logoSrc = location.pathname === '/institute' ? 'tcs2.png' : 'tcs.png';

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
    setDropdownOpen(false);
    setIsAboutDropdownOpen(false);
  };

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

  const handleDropdownClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownOpen((prev) => !prev);
      setIsAboutDropdownOpen(false);
    } else {
      handleLinkClick();
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

  const toggleAboutDropdown = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setIsAboutDropdownOpen((prev) => !prev);
      setDropdownOpen(false);
    } else {
      handleLinkClick();
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
      if (window.innerWidth > 768) {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target) &&
          event.target.className !== 'dropdown-toggle'
        ) {
          setDropdownOpen(false);
        }

        if (
          aboutDropdownRef.current &&
          !aboutDropdownRef.current.contains(event.target) &&
          event.target.className !== 'dropdown-toggle'
        ) {
          setIsAboutDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="brand" onClick={handleLinkClick}>
        <img src={logoSrc} alt="theChordifiersStudio" />
      </Link>

      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className="nav-item" onClick={handleLinkClick}>Home</Link>
        <Link to="/institute" className="nav-item" onClick={handleLinkClick}>Institute</Link>
        <a
          href="https://theone11.show/"
          className="nav-item"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleLinkClick}
        >
          The One11 Show
        </a>

        <div
          className="nav-item dropdown"
          ref={dropdownRef}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <span
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                handleDropdownClick(e);
              } else {
                navigate('/services');
                handleLinkClick();
              }
            }}
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

        <div
          className="nav-item dropdown"
          ref={aboutDropdownRef}
          onMouseEnter={openAboutDropdown}
          onMouseLeave={closeAboutDropdown}
        >
          <span
            onClick={(e) => {
              if (window.innerWidth <= 768) {
                toggleAboutDropdown(e);
              } else {
                navigate('/about');
                handleLinkClick();
              }
            }}
            className="dropdown-toggle"
          >
            About Us
          </span>
          <div className={`dropdown-menu about-dropdown-menu ${isAboutDropdownOpen ? 'open' : ''}`}>
            <HashLink smooth to="/about#our-stories" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>Our Story</HashLink>
            <HashLink smooth to="/about#our-gallery" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>Gallery</HashLink>
            <HashLink smooth to="/about#our-location" className="dropdown-item about-dropdown-item" onClick={closeAboutDropdownOnClick}>Visit us</HashLink>
          </div>
        </div>
      </div>

      <div className="menu-icon" onClick={toggleMenu}>☰</div>
    </nav>
  );
}
