import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import d1 from "../assets/d1.jpg"
import d2 from "../assets/d2.jpg"
import d3 from "../assets/d3.jpg"
import d4 from "../assets/d4.jpg"
import d5 from "../assets/d5.jpg"

const ProfessionalDiplomaCourses = () => {

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
      id: 'music-production',
      title: 'Diploma in Music Production',
      image: d1,
      questions: [
        'How long is the course last?',
        'How long to apply the course?',
        'Are the courses offline or online?',
        'Will I receive a certificate after completion?'
      ]
    },
    {
      id: 'sound-designing',
      title: 'Diploma in Sound Designing',
      image: d2,
      questions: [
        'How long is the course last?',
        'How long to apply about?',
        'Are the courses offline or online?',
        'Will I receive a certificate after completion?'
      ]
    },
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
      id: 'sound-designing-Specialization',
      title: 'Diploma in Sound Designing & Music Production  (Specialization)',
      image: d4,
      questions: [
        'How long is the course last?',
        'How long to apply about?',
        'Are the courses offline or online?',
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
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '1rem' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '4rem', textAlign: 'center', marginBottom: '2rem', fontWeight: 'bold' }}>
          Professional Diploma Courses
        </h1>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', alignItems: 'center' }}>
          {courses.map((course) => (
            <div key={course.id} style={{ maxWidth: '600px', marginTop: '1rem', width: '100%' }}>
              <h2 style={{ textAlign: 'center', fontSize: '1.8rem', marginBottom: '1rem', fontFamily: 'Crimson Text, serif' }}>
                {course.title}
              </h2>

              <div style={{ position: 'relative' }}>
                <img
                  src={course.image}
                  alt={course.title}
                  style={{ width: '100%', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
                />
              </div>

              <div style={{ marginTop: '0.5rem' }}>
                {course.questions.map((question, index) => (
                  <div key={index} style={{ border: '1px solid gray', overflow: 'hidden', marginBottom: '4px' }}>
                    <button
                      onClick={() => toggleSection(course.id, index)}
                      style={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '12px',
                        backgroundColor: '#1f2937',
                        color: 'white',
                        textAlign: 'left',
                        cursor: 'pointer',
                        border: 'none',
                        outline: 'none',
                      }}
                    >
                      <span style={{ fontSize: '0.95rem', fontWeight: '500' }}>{question}</span>
                      <ChevronDown
                        className={`${expandedSections[`${course.id}-${index}`] ? 'rotate-180' : ''}`}
                        style={{
                          width: '20px',
                          height: '20px',
                          transition: 'transform 0.2s',
                          transform: expandedSections[`${course.id}-${index}`] ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                      />
                    </button>

                    {expandedSections[`${course.id}-${index}`] && (
                      <div style={{ padding: '12px', backgroundColor: '#374151', borderTop: '1px solid #4b5563' }}>
                        <p style={{ fontSize: '0.95rem', color: '#d1d5db' }}>
                          This is placeholder content for the question "{question}".
                          You can replace this with actual course information and details.
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          backgroundColor: '#F0E81B',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          borderRadius: '12px',
          padding: '1rem',
          marginTop: '5rem',
          marginBottom: '2rem',
          gap: '0.75rem',
          maxWidth: '100%',
        }}>
          <h2 style={{ fontSize: '1.75rem', color: 'black', fontFamily: 'Crimson Text, serif' }}>
            Limited Seats Available
          </h2>
          <p style={{ fontSize: '1rem', color: 'black' }}>
            Get your seat as soon as possible!
          </p>
          <button
            onClick={() => {
              navigate('/institute/diploma-course-form'); // Navigate after scrolling
              window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to top
            }}
            style={{
              padding: '0.5rem 1rem',
              borderRadius: '12px',
              fontSize: '0.9rem',
              fontWeight: 'bold',
              border: '2px solid black',
              backgroundColor: 'black',
              color: '#F0E81B',
              cursor: 'pointer'
            }}
          >
            Enroll Now
          </button>
        </div>

        <div style={{ textAlign: 'center', color: 'red', fontSize: '1.1rem' }}>
          *EMI Options are available on prior Request
        </div>
      </div>
    </div>
  );
};

export default ProfessionalDiplomaCourses;
