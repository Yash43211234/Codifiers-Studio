import {React, useState, useEffect }from 'react';
import { useNavigate } from 'react-router-dom';
import music from "../assets/MusicCourse.png";
import Production from "../assets/MusicProduction.png";
import instrument from "../assets/InstrumentCourse.png";

const ProfessionalCertificationCourses = () => {
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

  const courses = [
    {
      id: 1,
      number: "1",
      title: "Music Production Courses",
      image: music,
      description: "Unleash your creative potential with our Music Production Courses, designed for students aspiring to master production at all skill levels. Whether you're a beginner eager to learn the basics or an experienced producer looking to refine your techniques, our courses cater to all.",
      link1: "/institute/certification-courses",
      link2: "/institute/diploma-courses",
    },
    {
      id: 2,
      number: "2",
      title: "Instrument Courses",
      image: instrument,
      description: "Master the art of playing your favorite instrument with our expertly designed Instrument Courses, tailored for musicians and aspiring professionals. Whether you're strumming a guitar, rocking out on the drums, or playing classical pieces on the piano, we have the right course to match your goals and passion.",
      link1: "/institute/instrument-certificate",
      link2: "/upcoming",
    },
    // {
    //   id: 3,
    //   number: "3",
    //   title: "Music Business Course",
    //   image: Production,
    //   description: "Turn your passion for music into a thriving career with our Music Business Course. Designed for artists, managers, and industry professionals, this course equips you with the essential skills needed to navigate the dynamic world of the music industry, build your brand, and achieve sustainable success.",
    //   link1: "/comingsoon",
    //   link2: "/institute/Music-certificate",
    // },
  ];

  const containerStyle = {
    backgroundColor: '#F0E81B',
    padding: '3rem 1rem',
    fontFamily: 'Commissioner, sans-serif',
  };

  const headingStyle = {
    textAlign: 'center',
    marginBottom: '3rem',
  };

  const titleStyle = {
    fontSize: isMobile?'25px':'39px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '0.5rem',
  };

  const subtitleStyle = {
    fontSize: isMobile?'1.022rem':'1.222rem',
    color: '#000',
    lineHeight:'-1px'
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '2rem',
  };

  const cardStyle = {
    flex: '1 1 300px',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F0E81B',
    fontFamily:'math',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
  };

  const numberStyle = {
    fontSize: '7rem',
    fontWeight: 'normal',
    color: '#000',
    textAlign: isMobile?'center':'left',
    marginBottom: '1rem',
    
  };

  const imageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    marginBottom: '1rem',
  };

  const courseTitleStyle = {
    fontSize: isMobile?'16.25px':'19.5px',
    fontWeight: 'bold',
    color: '#000',
    marginBottom: '1rem',
    textAlign: 'left',
  };

  const descriptionStyle = {
    fontSize: '1rem',
    color: '#000',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
    flex: 1,
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: isMobile?'column':'row',
    gap: '0.75rem',
  };

  const buttonStyle = {
    padding: '0.7rem 1.4rem',
    borderRadius: '4px',
    fontSize: '0.9rem',
    fontWeight: '600',
    backgroundColor: '#000',
    color: '#F0E81B',
    border: '2px solid #000',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>
        <h1 style={titleStyle}>The Courses We Offer</h1>
        <p style={subtitleStyle}>tailored to bring the best out of you!!</p>
      </div>

      <div style={gridStyle}>
        {courses.map((course) => (
          <div key={course.id} style={cardStyle}>
            {/* <div style={numberStyle}>{course.number}</div> */}
            <img src={course.image} alt={course.title} style={imageStyle} />
            <h2 style={courseTitleStyle}>{course.title}</h2>
            <p style={descriptionStyle}>{course.description}</p>

            <div style={buttonContainerStyle}>
              {course.id !== 3 && (
                <button
                  onClick={() => {navigate(course.link1)
                       window.scrollTo(0, 0);  }
                  }
                  style={{ ...buttonStyle }}
                >
                  Certification Courses
                </button>
              )}
              <button
                onClick={() => {navigate(course.link2)
                   window.scrollTo(0, 0);  }
                }
                style={{ ...buttonStyle }}
              >
                Diploma Courses
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfessionalCertificationCourses;
