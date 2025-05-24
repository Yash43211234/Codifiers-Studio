import React from 'react';
import Booking from '../components/Booking';
import { useNavigate } from 'react-router-dom';

export default function Institute() {

    const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate('/register');
  };

  const styles = {
    container: {
      marginTop: '0',
      width: '100%',
      textAlign: 'left',
      position: 'relative',
    },
    image: {
      width: '100%',
      height: 'auto',
      maxHeight: '700px',
      objectFit: 'cover',
      display: 'block', // important fix for mobile spacing
    },
    heading: {
      fontSize: '3rem',
      marginBottom: '10px',
    },
    subText: {
      fontSize: '1.2rem',
      marginBottom: '20px',
    },
    button: {
      padding: '10px 25px',
      fontSize: '1rem',
      fontWeight: 'bold',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      color: '#000',
      cursor: 'pointer',
      border: 'none',
    },
  };

  return (
    <>
      <div className='cont' style={styles.container}>
        <img
          src="https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/2147484495/images/WxbIQnoPSkq6soh2v1Vw_The_Complete_Guide_to_Learning_Music_Production_Everything_You_Need_to_Know_-_Learn_Music_Production_Blog.png"
          alt="Institute Banner"
          style={styles.image}
        />

        <div className="institute-overlay">
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'nowrap',
            gap: '20px'
          }}>
            <div style={{ flex: '1', textAlign: 'left' }}>
              <h1 className="overlay-heading" style={styles.heading}>Elevate Your Sound in 2025–2026</h1>
              <p className="overlay-subtext" style={styles.subText}>
                Join our advanced Music Production program – hands-on training with industry tools, live projects, and mentorship.
              </p>
            </div>
            <div style={{ flex: '0 0 auto', textAlign: 'right' }}>
              <button className="enroll-button" style={styles.button} onClick={handleRegisterClick}>Enroll Now</button>
            </div>
          </div>
        </div>
      </div>

      <Booking />

      {/* Style Fixes */}
      <style>{`
        body {
          margin: 0;
          padding: 0;
        }

        .institute-overlay {
          position: absolute;
          top: 50%;
          left: 40%;
          transform: translate(-50%, -50%);
          color: #fff;
          text-align: left;
          background-color: rgba(0, 0, 0, 0.5);
          padding: 20px;
          border-radius: 12px;
          max-width: 100%;
          z-index: 2;
          width: 70%;
        }

        @media (max-width: 768px) {
        .cont{
            padding-top:50px;    
        }
          .institute-overlay {
            position: absolute;
            top: 54%;
            transform: translate(-50%, -50%);
            left: 50%;
            width: 90%;
            padding: 16px;
          }

          .overlay-heading {
            font-size: 1rem !important;
          }

          .overlay-subtext {
            font-size: 1rem !important;
          }

          .enroll-button {
            font-size: 0.8rem !important;
            padding: 8px 18px !important;
          }
        }

        @media (max-width: 480px) {
          .institute-overlay {
            top: 60%;
            width: 85%;
            padding: 10px;
          }

          .overlay-heading {
            font-size: 0.7rem !important;
          }

          .overlay-subtext {
            font-size: 0.6rem !important;
          }

          .enroll-button {
            font-size: 0.65rem !important;
            padding: 6px 14px !important;
          }
        }
      `}</style>
    </>
  );
}