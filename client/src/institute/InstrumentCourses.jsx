import React from 'react';
import guiter from '../assets/guiter.png';
import drums from '../assets/drums.png';
import piano from '../assets/piano.png';

export default function InstrumentCourses() {
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
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h1
            style={{
              fontSize: '5rem',
              fontWeight: 'bold',
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
                overflow: 'hidden',
                transition: 'box-shadow 0.3s',
                width: '100%',
                maxWidth: '380px',
                flex: '1 1 300px',
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
                <button
                  style={{
                    backgroundColor: '#000',
                    color: '#fff',
                    padding: '0.6rem 1.4rem',
                    borderRadius: '999px',
                    fontSize: '0.95rem',
                    fontWeight: '500',
                    border: 'none',
                    cursor: 'pointer',
                    width: '30%',
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = '#222')
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = '#000')
                  }
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
