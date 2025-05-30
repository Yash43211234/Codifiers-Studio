import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // or HashRouter

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
import QueryPage from './components/QueryPage';
import CopyrightFooter from './components/CopyrightFooter';
import ProMusicComposition from './services/ProMusicComposition';
import ProAudioRecording from './services/ProAudioRecording';
import Artist from './services/Artist';
import ArtistManagement from './services/ArtistManagement';
import ArtistPromotion from './services/ArtistPromotion';
import MusicDistribution from './services/MusicDistribution';
import MusicPromotion from './services/MusicPromotion';
import PortfolioShoot from './services/PortfolioShoot';
import ProAudioEditing from './services/ProAudioEditing';
import ProAudioMastering from './services/ProAudioMastering';
import ProAudioMixing from './services/ProAudioMixing';
import VideoProduction from './services/VideoProduction';
import ProSoundDesign from './services/ProSoundDesign';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <Router>
      <Navbar onAuthClick={() => setIsAuthModalOpen(true)} />
      <div className="app-wrapper">
        <Pop />
        <Routes>
          
          {/* Navbar */}
          <Route path="/" element={<One_One />} />
          <Route path="/about" element={<About />} />
          <Route path="/institute" element={<Institute />} />
          <Route path="/one_one" element={<One_One />} />
          <Route path="/one11Register" element={<One11ShowRegistrationForm />} />
          <Route path="/one_one/upcoming" element={<ComingSoon />} />
          
          {/* //Not in use right noe*/}
          <Route path="/creativity" element={<Creativity />} />
          
          <Route path="/register" element={<Register />} />
          <Route path="/submission-successfully" element={<Thank_you />} />
          <Route path="/query" element={<QueryPage />} />
          
          
          {/* services */}
          <Route path="/artist" element={<Artist />} />
          <Route path="/artist-management" element={<ArtistManagement />} />
          <Route path="/artist-promotion" element={<ArtistPromotion />} />
          <Route path="/music-distribution" element={<MusicDistribution />} />
          <Route path="/music-production" element={<MusicPromotion />} />
          <Route path="/portfolio-shoot" element={<PortfolioShoot />} />
          <Route path="/pro-audio-editing" element={<ProAudioEditing />} />
          <Route path="/pro-audio-mastering" element={<ProAudioMastering />} />
          <Route path="/pro-audio-mixing" element={<ProAudioMixing />} />
          <Route path="/pro-music-production" element={<ProMusicComposition />} />
          <Route path="/pro-audio-recording" element={<ProAudioRecording />} />
          <Route path="/pro-sound-design" element={<ProSoundDesign />} />
          <Route path="/video-production" element={<VideoProduction />} />
          
                    
          {/* error */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Footer />
      <CopyrightFooter />
    </Router>
  );
}

export default App;
