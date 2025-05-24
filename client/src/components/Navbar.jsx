import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand">The Chordifiers Studio</Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <Link to="/"  className="nav-item" onClick={() => setMenuOpen(false)}>Home</Link>

          <Link to="/institute" className="nav-item" onClick={() => setMenuOpen(false)}>Institute</Link>
           <Link to="/one_one" className="nav-item" onClick={() => setMenuOpen(false)}>One11 </Link>
          <Link to="/creativity" className="nav-item" onClick={() => setMenuOpen(false)}>Record Label</Link>

          <Link to="/about" className="nav-item" onClick={() => setMenuOpen(false)}>About</Link>
        </div>

        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
      </nav>

      {/* CSS in same file */}
      <style>{`
        .navbar {
          position: fixed;
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
          height: 74px;
          padding: 0 20px;
          box-sizing: border-box;
        }

        .brand {
          font-size: 1.5rem;
          color: #fff;
          text-decoration: none;
          white-space: nowrap;
        }

        .nav-links {
          display: flex;
          gap: 1rem;
        }

        .nav-item {
          padding: 0 12px;
          color: #fff;
          text-decoration: none;
          font-size: 1.2rem;
          height: 100%;
          display: flex;
          align-items: center;
        }

        .menu-icon {
          display: none;
          font-size: 2rem;
          color: #fff;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links {
            position: absolute;
            top: 74px;
            left: 0;
            right: 0;
            background-color: #000;
            flex-direction: column;
            display: none;
          }

          .nav-links.open {
            display: flex;
          }

          .menu-icon {
            display: block;
          }

          .nav-item {
            padding: 1rem;
            border-top: 1px solid #333;
          }
        }
      `}</style>
    </>
  );
}
