import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AudioRequestTable from '../Forms/AudioRequestTable';


const Dashboard = () => {
  const styles = {
    container: {
      display: 'flex',
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
    },
    sidebar: {
      width: '220px',
      backgroundColor: '#2c3e50',
      padding: '1rem',
      color: '#ecf0f1',
    },
    link: {
      display: 'block',
      color: '#ecf0f1',
      textDecoration: 'none',
      margin: '10px 0',
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
      padding: '2rem',
      backgroundColor: '#f4f6f8',
    },
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <h2>Dashboard</h2>
        <Link to="/dashboard-thechordifiersstudio/get-audio-form-request" style={styles.link}>🎧 Audio Form</Link>
        <Link to="/dashboard/get-video-form-request" style={styles.link}>🎬 Video Form</Link>
        <Link to="/dashboard/get-voice-form-request" style={styles.link}>🎤 Voiceover Form</Link>
      </div>

      {/* Dynamic Content Area */}
      <div style={styles.content}>
        <Routes>
          <Route path="get-audio-form-request" element={<AudioRequestTable />} />
          <Route path="get-video-form-request" element={<div>Video Form Table (Coming Soon)</div>} />
          <Route path="get-voice-form-request" element={<div>Voiceover Form Table (Coming Soon)</div>} />
          <Route path="*" element={<div>Select a form from the sidebar.</div>} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
