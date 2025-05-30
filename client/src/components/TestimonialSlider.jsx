import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    text: `I would like to recommend "The Chordifiers Studio" to everyone. Here satisfaction is guaranteed with utmost priority with reasonable pricing. The zeal and enthusiasm shown by the members are well exemplary.`,
    image: '/images/user2.png',
    
  },
  {
    text: `"The Chordifiers Studio was excellent and it was an amazing experience to jam out. Everything is perfect out there sound, environment!`,
    image: '/images/user3.png',
    
  },
  {
    text: `An amazing studio, with such a great ambience and amazing producers! I would recommend to everyone.`,
    image: '/images/user1.png',
    
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup
  }, []);

  const t = testimonials[current];

  return (
    <div
      style={{
        backgroundImage: 'url("/images/Party.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '60px 40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '20px',
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          transition: 'opacity 0.5s ease-in-out',
        }}
      >
        <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#000', fontFamily: 'Roboto' }}>
          {t.text}
        </p>
        <div style={{ marginTop: '20px' }}>
          <img
            src={t.image}
            alt={t.name}
            style={{
              width: '90px',
              height: '90px',
              
              objectFit: 'cover',
              marginBottom: '8px',
            }}
          />
          <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>{t.name}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlider;
