import {React, useEffect, useState} from 'react';
import guiter from '../assets/guiter.png';
import drums from '../assets/drums.png';
import piano from '../assets/piano.png';
import { useNavigate } from 'react-router-dom';

export default function InstrumentCourses() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
        useEffect(() => {
            const checkScreen = () => {
              setIsMobile(window.innerWidth < 768);
            };
            checkScreen(); // initial check
            window.addEventListener('resize', checkScreen);
            return () => window.removeEventListener('resize', checkScreen);
          }, []);
  

  const instruments = [
    {
      id: 'guitar',
      name: 'Guitar',
      image: guiter,
      description:
        'Tailored lessons for all skill levels, helping you master guitar at your own pace with expert guidance.',
    },
    {
      id: 'drums',
      name: 'Drums',
      image: drums,
      description:
        'Drum lessons for all levels, tailored to your needs. Available online or in-person with experienced instructors.',
    },
    {
      id: 'piano',
      name: 'Piano - Keyboard',
      image: piano,
      description:
        'Personalized piano lessons for all levels, available online or in-person with expert instructors and flexible scheduling.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#F0E81B',
        minHeight: '100vh',
        padding: '2rem',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: isMobile?'2rem':'2.5rem',
              fontWeight: '700',
              color: 'black',
              fontFamily: 'Plus Jakarta Sans, sans-serif',
              marginBottom: '1rem',
            }}
          >
            Instrument Courses
          </h1>
        </div>

        {/* Instruments Grid */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          {instruments.map((instrument) => (
            <div
              key={instrument.id}
              style={{
                backgroundColor: 'white',
                borderRadius: '12px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                transition: 'box-shadow 0.3s',
                flex: '1 1 300px',
                maxWidth: '100%',
                minWidth: '280px',
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = '0 6px 12px rgba(0,0,0,0.2)')
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)')
              }
            >
              {/* Image */}
              <div style={{ height: '220px', overflow: 'hidden' }}>
                <img
                  src={instrument.image}
                  alt={instrument.name}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.transform = 'scale(1.05)')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.transform = 'scale(1)')
                  }
                />
              </div>

              {/* Content */}
              <div style={{ padding: '1.25rem' }}>
                <h3
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 'bold',
                    fontFamily: 'Playfair Display, serif',
                    marginBottom: '1rem',
                    color: '#000',
                    textAlign: 'center',
                  }}
                >
                  {instrument.name}
                </h3>
                <p
                  style={{
                    fontSize: '1rem',
                    lineHeight: '1.6',
                    fontFamily: 'Roboto, sans-serif',
                    color: '#444',
                    marginBottom: '1.5rem',
                  }}
                >
                  {instrument.description}
                </p>
                <div style={{ textAlign: 'center' }}>
                  <button
                    onClick={() => {
                      navigate('/upcoming');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    style={{
                      backgroundColor: '#000',
                      color: '#fff',
                      padding: '7px 13px',
                      borderRadius: '999px',
                      fontSize: '13px',
                      fontWeight: '500',
                      border: 'none',
                      cursor: 'pointer',
                      height: '32px',
                      width: '128px',
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = '#222')
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = '#000')
                    }
                  >
                    Coming Soon
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
