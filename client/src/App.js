// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import About from './pages/About';
import Creativity from './pages/Creativity';
import Institute from './pages/Institute';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/institute" element={<Institute />} />
        </Routes>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </Router>
  );
}

export default App;
