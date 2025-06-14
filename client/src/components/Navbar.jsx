import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setDropdownOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      // Delay closing dropdown on mouse leave
      timeoutRef.current = setTimeout(() => setDropdownOpen(false), 100);
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
  };

  // Handles outside clicks safely with delay and timeout clearing
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        // Clear any existing timeout
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        // Delay closing dropdown
        timeoutRef.current = setTimeout(() => setDropdownOpen(false), 100);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);


  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand" onClick={handleLinkClick}>
          <img
            src="tcs.png"
            alt="theChordifiersStudio"
            style={{ height: '24px' }}
          />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="nav-item" onClick={handleLinkClick}>
            Home
          </Link>
          <Link to="/institute" className="nav-item" onClick={handleLinkClick}>
            Institute
          </Link>


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
            onClick={handleDropdownClick}
          >
            <span className="dropdown-toggle">Services</span>


            <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
              <Link to="/pro-music-production" className="dropdown-item" onClick={handleLinkClick}>
                Pro Music Composition
              </Link>
              <Link to="/pro-audio-recording" className="dropdown-item" onClick={handleLinkClick}>
                Pro Audio Recording
              </Link>
              <Link to="/pro-audio-editing" className="dropdown-item" onClick={handleLinkClick}>
                Pro Audio Editing & Arrangement
              </Link>
              <Link to="/pro-sound-design" className="dropdown-item" onClick={handleLinkClick}>
                Pro Sound Design
              </Link>
              <Link to="/pro-audio-mixing" className="dropdown-item" onClick={handleLinkClick}>
                Pro Audio Mixing
              </Link>
              <Link to="/pro-audio-mastering" className="dropdown-item" onClick={handleLinkClick}>
                Pro Audio Mastering
              </Link>
              <Link to="/upcoming" className="dropdown-item" onClick={handleLinkClick}>
                Music Distribution
              </Link>
              <Link to="/video-production" className="dropdown-item" onClick={handleLinkClick}>
                Video Production
              </Link>           
              {/* <Link to="/portfolio-shoot" className="dropdown-item" onClick={handleLinkClick}>
                Portfolio Shoot
              </Link> */}
              <Link to="/music-production" className="dropdown-item" onClick={handleLinkClick}>
                Music Promotion
              </Link>
              {/* <Link to="/artist" className="dropdown-item" onClick={handleLinkClick}>
                Artist
              </Link> */}
              {/* <Link to="/artist-promotion" className="dropdown-item" onClick={handleLinkClick}>
                Artist Promotion
              </Link> */}
              <Link to="/artist-management" className="dropdown-item" onClick={handleLinkClick}>
                Artist Management
              </Link>
            </div>
          </div>

          <Link to="/upcoming" className="nav-item" onClick={handleLinkClick}>
            Record Label
          </Link>
          <Link to="/about" className="nav-item" onClick={handleLinkClick}>
            About Us
          </Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      <style>{`
        .navbar {
          
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #000;
          color: #fff;
          width: 100%;
          height: 103px;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .brand {
          font-size: 1.5rem;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
        }
        .brand img {
             height: 153px !important;
            width: 150px !important;
        }

        .nav-links {
          display: flex;
          gap: .3rem;
          align-items: center;
        }
                                                                                     
        .nav-item { 
          padding: 0 12px;
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          height: 100%;
          display: flex;
          align-items: center;
          cursor: pointer;
          position: relative;
          user-select: none;
          font-family: 'Arial';
        }

        .dropdown-toggle {
          user-select: none;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 0;
          background: #111;
          border: 1px solid #333;
          display: none;
          flex-direction: column;
          min-width: 150px;
          margin-top: 4px;
          border-radius: 4px;
          z-index: 1001;
        }

        .dropdown-menu.open {
          display: flex;
        }

        .dropdown-item {
          padding: 8px 12px;
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          white-space: nowrap;
          cursor: pointer;
        }

        .dropdown-item:hover {
          background-color: #444;
        }

        .menu-icon {
          display: none;
          font-size: 2rem;
          color: #fff;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 14px 25px 2px 0px;
          }
          .nav-links {
            position: absolute;
            top: 53px;
            left: 0;
            right: 0;
            background-color: #000;
            flex-direction: column;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }

          .nav-item {
            padding: 1rem;
            border-top: 1px solid #333;
            height: auto;
          }

          .dropdown-menu {
            position: relative;
            top: 0;
            left: 0;
            border: none;
            background: #111;
            margin-top: 0;
            display: none;
            border-radius: 0;
            box-shadow: none;
          }

          .dropdown-menu.open {
            display: flex;
          }

          .dropdown-item {
            padding-left: 2rem;
            border-top: 1px solid #333;
          }

          .menu-icon {
            display: block;
          }
            @media (max-width: 480px) {
  .navbar {
    padding: 10px 15px;
    height: 54px;
    z-index: 1001;
  }

  .brand img {
                          height: 90px !important;
            width: 100px !important;
  }

  .nav-item {
    font-size: 1rem;
    padding: 0.8rem 1rem;
  }

  .dropdown-item {
    font-size: 0.95rem;
    padding-left: 1.5rem;
  }

  .menu-icon {
    font-size: 1.8rem;
  }
}
  @media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 53px;
    left: 0;
    right: 0;
    background-color: #000;
    flex-direction: column;
    display: none;
    max-height: 80vh; /* 🆕 Limit height */
    overflow-y: auto;  /* 🆕 Enable vertical scroll */
    z-index: 1001;    /* Make sure it's above other content */
  }

  .nav-links.open {
    display: flex;
  }

  .dropdown-menu {
    position: relative;
    top: 0;
    left: 0;
    border: none;
    background: #111;
    margin-top: 0;
    display: none;
    border-radius: 0;
    box-shadow: none;
    flex-direction: column;
    max-height: 300px;  /* 🆕 Optional: limit height */
    overflow-y: auto;   /* 🆕 Scroll if too long */
  }

  .dropdown-menu.open {
    display: flex;
  }

  .dropdown-item {
    padding-left: 2rem;
    border-top: 1px solid #333;
    font-size: 1rem;
  }
}

        }
      `}</style>
    </>
  );
}
