import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaEnvelope,
  FaWhatsapp,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter
} from 'react-icons/fa';
import { Box, Fab } from '@mui/material';

const styles = {
  wrapper: {
    backgroundColor: '#F0E81B',
    padding: '3rem 1rem',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backdropFilter: 'blur(12px)',
    background: 'rgba(255, 255, 255, 0.2)',
    borderRadius: '20px',
    padding: '2.5rem',
    maxWidth: '620px',
    width: '100%',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
    color: '#2d3436',
    textAlign: 'center',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '2rem',
    color: '#2d3436',
  },
  contactItem: {
    fontSize: '1.1rem',
    margin: '1rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    color: '#2d3436',
  },
  link: {
    color: '#2d3436',
    textDecoration: 'none',
    borderBottom: '1px solid transparent',
    transition: 'all 0.3s ease',
    fontWeight: '500',
  },
  socialHeader: {
    marginTop: '2rem',
    marginBottom: '1rem',
    fontSize: '1.3rem',
    color: '#2d3436',
  },
  iconBox: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
};

export default function ConnectWithUs() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Let's Connect</h2>

        <div>
          <div style={styles.contactItem}>
            <span>💬</span>
            <Link to="/contact" style={styles.link}>Contact Us</Link>
          </div>
          <div style={styles.contactItem}>
            <FaEnvelope />
            <a href="mailto:thechordifiersstudio@gmail.com" style={styles.link}>thechordifiersstudio@gmail.com</a>
          </div>
          <div style={styles.contactItem}>
            <FaWhatsapp />
            <a href="https://wa.me/917811092672" target="_blank" rel="noopener noreferrer" style={styles.link}>+91 7811092672</a>
          </div>
        </div>

        <div>
          <h4 style={styles.socialHeader}>Follow Us</h4>
          <Box sx={styles.iconBox}>
            <Fab color="warning" size="medium" href="https://facebook.com/chordifiersstudio" target="_blank">
              <FaFacebookF />
            </Fab>
            <Fab color="warning" size="medium" href="https://linkedin.com/company/chordifiersstudio" target="_blank">
              <FaLinkedinIn />
            </Fab>
            <Fab sx={{ backgroundColor: '#e84393', color: '#fff' }} size="medium" href="https://instagram.com/chordifiers.studio" target="_blank">
              <FaInstagram />
            </Fab>
            <Fab sx={{ backgroundColor: '#00acee', color: '#fff' }} size="medium" href="https://twitter.com/chordifiers" target="_blank">
              <FaTwitter />
            </Fab>
          </Box>
        </div>
      </div>
    </div>
  );
}
