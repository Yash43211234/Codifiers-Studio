import React, { useState } from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AuthModal from './components/AuthModal';
import Home from './pages/Home';
import About from './pages/About';
import Creativity from './pages/Creativity';
import Institute from './pages/Institute';
import Footer from './components/Footer';
import Register from './pages/Register';
import Pop from './components/Pop';
import One_One from './pages/One_One';
import ComingSoon from './components/ComingSoon';
import NotFound from './components/NotFound';
import One11ShowRegistrationForm from './components/One11ShowRegistrationForm';
import Thank_you from './components/Thank_you';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
      <div className="app-wrapper">
        <Pop />
        <Routes>
          <Route path="/" element={<One_One />} />
          <Route path="/about" element={<About />} />
          <Route path="/creativity" element={<Creativity />} />
          <Route path="/institute" element={<Institute />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/register" element={<Register />} />
          <Route path="/one_one" element={<One_One />} />
          <Route path="/one11Register" element={< One11ShowRegistrationForm />} />
          <Route path="/submission-successfully" element={< Thank_you />} />
          <Route path="/one_one/upcoming" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />

        </Routes>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />

      <Footer />
    </Router>
  );
}

export default App;
