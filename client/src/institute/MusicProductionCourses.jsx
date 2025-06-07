import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import image1 from '../assets/3.jpg';
import image2 from "../assets/2.jpg";
import image3 from "../assets/1.jpg";
import image4 from "../assets/4.jpg";

export default function MusicProductionCourses() {
  const [expandedCards, setExpandedCards] = useState({});
  const navigate = useNavigate();

  const toggleCard = (cardId, questionId) => {
    const key = `${cardId}-${questionId}`;
    setExpandedCards(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const courses = [
    {
      id: 'basic',
      level: 'BASIC',
      title: 'Music Production Basic',
      image: image1,
      color: 'linear-gradient(to right, yellow, orange)'
    },
    {
      id: 'intermediate',
      level: 'INTERMEDIATE',
      title: 'Music Production Intermediate',
      image: image2,
      color: 'linear-gradient(to right, purple, pink)'
    },
    {
      id: 'advance',
      level: 'ADVANCE',
      title: 'Music Production Advance',
      image: image3,
      color: 'linear-gradient(to right, blue, purple)'
    },
    {
      id: 'pro',
      level: 'PRO',
      title: 'Music Production Pro',
      image: image4,
      color: 'linear-gradient(to right, green, blue)'
    }
  ];

  const questions = [
    'How long do the courses last?',
    'How long is each class?',
    'Are the courses online or offline?',
    'Will I receive a certificate after completion?'
  ];

  return (
    <div style={{ backgroundColor: 'black', minHeight: '100vh', padding: '32px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <h1 style={{
            fontSize: '4rem',
            color: 'white',
            fontFamily: 'sans-serif',
            fontWeight: 'bold'
          }}>
            Professional Certification Courses
          </h1>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {courses.map((course) => (
            <div key={course.id} style={{ backgroundColor: '#1f2937', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ position: 'relative', height: '200px' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>

              <div style={{ padding: '16px' }}>
                <h3 style={{
                  color: 'white',
                  fontFamily: 'Crimson Text, serif',
                  textAlign: 'center',
                  marginBottom: '12px',
                  fontSize: '1.2rem'
                }}>
                  {course.title}
                </h3>

                <div style={{
                  border: '1px solid #ccc',
                  borderRadius: '12px',
                  overflow: 'hidden'
                }}>
                  {questions.map((question, index) => (
                    <div key={index} style={{
                      borderBottom: index !== questions.length - 1 ? '1px solid #888' : 'none'
                    }}>
                      <button
                        onClick={() => toggleCard(course.id, index)}
                        style={{
                          width: '100%',
                          background: 'none',
                          border: 'none',
                          padding: '8px 12px',
                          color: 'white',
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          cursor: 'pointer'
                        }}
                      >
                        <span style={{ fontSize: '14px' }}>{question}</span>
                        <ChevronDown
                          style={{
                            width: '16px',
                            height: '16px',
                            transition: 'transform 0.2s',
                            transform: expandedCards[`${course.id}-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)'
                          }}
                        />
                      </button>

                      {expandedCards[`${course.id}-${index}`] && (
                        <div style={{ padding: '0 12px 8px 12px', color: '#aaa', fontSize: '13px' }}>
                          <p>
                            {index === 0 && "Our courses typically last 8-12 weeks depending on the level."}
                            {index === 1 && "Each class is 2-3 hours long with hands-on practice sessions."}
                            {index === 2 && "We offer both online and offline modes to suit your preference."}
                            {index === 3 && "Yes, you'll receive a professional certificate upon successful completion."}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enroll Now Section */}
        <div style={{
          backgroundColor: '#F0E81B',
          marginTop: '60px',
          padding: '20px',
          borderRadius: '12px',
          maxWidth: '1200px',
          margin: '60px auto 30px',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontFamily: 'Crimson Text, serif',
            fontSize: '2rem',
            marginBottom: '8px',
            color: 'black'
          }}>
            Limited Seats Available
          </h2>
          <p style={{ fontSize: '1rem', color: 'black' }}>
            Get your seat as soon as possible!
          </p>
          <button
            style={{
              marginTop: '10px',
              padding: '10px 20px',
              fontWeight: 'bold',
              fontSize: '14px',
              backgroundColor: 'black',
              color: '#F0E81B',
              borderRadius: '8px',
              border: '2px solid black',
              cursor: 'pointer'
            }}
            onClick={() => {navigate('/institute/Music-certificate-form')
               window.scrollTo(0, 0);  
            }}
          >
            Enroll Now
          </button>
        </div>

        {/* EMI Info */}
        <div style={{
          textAlign: 'center',
          color: 'red',
          fontSize: '16px',
          marginTop: '10px'
        }}>
          *EMI Options are available on prior Request
        </div>
      </div>
    </div>
  );
}
