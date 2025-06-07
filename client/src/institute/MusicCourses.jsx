import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import d3 from "../assets/d3.jpg";
import d5 from "../assets/d5.jpg";

const MusicCourses = () => {
    const navigate = useNavigate();

  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId, questionIndex) => {
    const key = `${sectionId}-${questionIndex}`;
    setExpandedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const courses = [
    {
      id: 'musicproduction',
      title: 'Diploma in Music Production & Music Business (Specialization)',
      image: d3,
      questions: [
        'How long do the courses last?',
        'How long is each class?',
        'Are the courses online or offline?',
        'Will I receive a certificate after completion?'
      ]
    },
    {
      id: 'sound-designing-Business',
      title: 'Diploma in Sound Designing & Music Production & Music Business (Specialization)',
      image: d5,
      questions: [
        'How long is the course last?',
        'How long to apply about?',
        'Are the courses offline or online?',
        'Will I receive a certificate after completion?'
      ]
    }
  ];

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', textAlign: 'center', marginBottom: '40px' }}>
          Professional Diploma Courses
        </h1>

        {courses.map((course) => (
          <div key={course.id} style={{ marginBottom: '40px', borderRadius: '8px', overflow: 'hidden', backgroundColor: '#222' }}>
            <h2
              style={{
                fontSize: '28px',
                textAlign: 'center',
                marginBottom: '16px',
                fontFamily: 'Crimson Text, serif',
                padding: '8px'
              }}
            >
              {course.title}
            </h2>

            <img
              src={course.image}
              alt={course.title}
              style={{ width: '100%', height: 'auto', borderRadius: '8px 8px 0 0' }}
            />

            {course.questions.map((question, index) => {
              const isOpen = expandedSections[`${course.id}-${index}`];

              return (
                <div
                  key={index}
                  style={{
                    border: '1px solid gray',
                    marginTop: '10px',
                    borderRadius: '6px',
                    overflow: 'hidden',
                    backgroundColor: '#111'
                  }}
                >
                  <button
                    onClick={() => toggleSection(course.id, index)}
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '12px 16px',
                      backgroundColor: '#222',
                      color: 'white',
                      fontSize: '16px',
                      fontWeight: '500',
                      cursor: 'pointer',
                      border: 'none',
                      outline: 'none'
                    }}
                  >
                    <span>{question}</span>
                    <ChevronDown
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      style={{
                        padding: '12px 16px',
                        backgroundColor: '#333',
                        fontSize: '14px',
                        color: '#ddd'
                      }}
                    >
                      This is placeholder content for the question "{question}". You can replace this with actual course information.
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        ))}

        {/* Enroll Banner */}
        <div
          style={{
            backgroundColor: '#F0E81B',
            color: 'black',
            borderRadius: '10px',
            padding: '20px',
            marginTop: '60px',
            textAlign: 'center',
            maxWidth: '1000px',
            margin: '60px auto 20px auto'
          }}
        >
          <h2 style={{ fontSize: '32px', fontFamily: 'Crimson Text, serif' }}>Limited Seats Available</h2>
          <p style={{ fontSize: '18px', margin: '10px 0' }}>Get your seat as soon as possible!</p>
          <button
            onClick={() => {navigate('/institute/Music-course-form')
               window.scrollTo({ top: 0, behavior: "smooth" })}
            }
            
            style={{
              padding: '10px 20px',
              borderRadius: '8px',
              backgroundColor: 'black',
              color: '#F0E81B',
              border: '2px solid black',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            Enroll Now
          </button>
        </div>

        {/* EMI Notice */}
        <div
          style={{
            textAlign: 'center',
            color: 'red',
            fontSize: '18px',
            marginTop: '12px'
          }}
        >
          *EMI Options are available on prior Request
        </div>
      </div>
    </div>
  );
};

export default MusicCourses;
