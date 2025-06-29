import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // or HashRouter


import Navbar from './components/Navbar';

import About from './pages/About';
import Institute from './pages/Institute';
import Footer from './components/Footer';
import Register from './pages/Register';
import Pop from './components/Pop';
import One_One from './pages/One_One';

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
import DevelopmentNotice from './components/DevelopmentNotice';
import ComposeMusicRequestForm from './Forms/ComposeMusicRequestForm';
import ProAudioRecordingForm from './Forms/ProAudioRecordingForm';
import Dashboard from './pages/Dashboard';
import MusicCourses from './institute/MusicCourses';
import MusicProductionCourses from './institute/MusicProductionCourses';
import ProfessionalDiplomaCourses from './institute/ProfessionalDiplomacourse';
import InstrumentCourses from './institute/InstrumentCourses';
import CourseRegistrationForm from './institute/Forms/CourseRegistrationForm';
import ComingSoon from './pages/ComingSoon';
import MusicCourseForm from './institute/Forms/MusicCourseForm';
import DiplomaCourseForm from './institute/Forms/DiplomaCourseForm';
import ConnectWithUs from './components/Footer/ConnectWithUs';
import FooterServices from './components/Footer/FooterServices';
import ScrollToTop from './components/ScrollToTop';





function App() {

  return (
    <Router>
      <ScrollToTop/>
      <Navbar />
      <div className="app-wrapper">
        <Pop />
        <DevelopmentNotice />
        <Routes>

          {/* Navbar */}
          <Route path="/" element={<One_One />} />
          <Route path="/Institute" element={<Institute />} />
          {/* services */}
              <Route path="/pro-music-production" element={<ProMusicComposition />} />
              <Route path="/artist" element={<Artist />} />
              <Route path="/artist-management" element={<ArtistManagement />} />
              <Route path="/artist-promotion" element={<ArtistPromotion />} />
              <Route path="/music-distribution" element={<MusicDistribution />} />
              <Route path="/music-production" element={<MusicPromotion />} />
              <Route path="/portfolio-shoot" element={<PortfolioShoot />} />
              <Route path="/pro-audio-editing" element={<ProAudioEditing />} />
              <Route path="/pro-audio-mastering" element={<ProAudioMastering />} />
              <Route path="/pro-audio-mixing" element={<ProAudioMixing />} />
              <Route path="/pro-audio-recording" element={<ProAudioRecording />} />
              <Route path="/pro-sound-design" element={<ProSoundDesign />} />
              <Route path="/video-production" element={<VideoProduction />} />
          <Route path="/about" element={<About />} />
         



          <Route path="/one11Register" element={<One11ShowRegistrationForm />} />
          <Route path="/register" element={<Register />} />
          <Route path="/submission-successfully" element={<Thank_you />} />
          <Route path="/query" element={<QueryPage />} />


          {/* institute routing */}
          <Route path="/institute/certification-courses" element={<MusicProductionCourses />} />
          <Route path="/institute/diploma-courses" element={<ProfessionalDiplomaCourses />} />
          <Route path="/institute/instrument-certificate" element={<InstrumentCourses />} />
          <Route path="/institute/Music-certificate-form" element={<CourseRegistrationForm />} />
          <Route path="/institute/Music-certificate" element={<MusicCourses />} />
          <Route path="/institute/Music-course-form" element={<MusicCourseForm />} />
          <Route path="/institute/diploma-course-form" element={<DiplomaCourseForm />} />
          

          {/* dashboard */}
          <Route path="/dashboard-thechordifiersstudio/*" element={<Dashboard />} />


          {/* forms */}
          <Route path="/request-form" element={<ComposeMusicRequestForm />} />
          <Route path="/pro-audio-recording-form" element={<ProAudioRecordingForm />} />


          {/* footer items */}
           <Route path="/connect-with-us" element={<ConnectWithUs />} />
           <Route path="/services" element={<FooterServices />} />

          {/* error and upcoming pages */}
          <Route path="/upcoming" element={<ComingSoon />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      <Footer />
      <CopyrightFooter />
    </Router>
  );
}

export default App;
