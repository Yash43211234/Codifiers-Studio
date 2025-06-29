import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ServicesWeOffer = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = screenWidth <= 768;

  const services = [
    {
      title: "Pro Music Composition",
      desc: "Pro Music Composition is the creation of original music for melodies, harmonies, rhythms, and instruments. It involves combining creative talents and technical ability to create professional tracks of a polished standard for different genres and media platforms.",
      image: "/servicesIcons/icon1.png",
      link1: "/pro-music-production",
    },
    {
      title: "Pro Audio Recording",
      desc: "Pro Audio Recording captures high-quality sound using advanced equipment and techniques. It ensures clarity, depth, and precision for vocals, instruments, and effects, forming the foundation of professional music, film, and media production.",
      image: "/servicesIcons/icon2.png",
      link1: "/pro-audio-recording",
    },
    {
      title: "Pro Audio Editing & Arrangement",
      desc: "Pro Audio Editing & Arrangement involves refining recorded sounds by cutting, adjusting, and enhancing audio clips. It structures elements like vocals and instruments into cohesive, polished tracks ready for mixing and final production.",
      image: "/servicesIcons/icon3.png",
      link1: "/pro-audio-editing",
    },
    {
      title: "Pro Sound Design",
      desc: "Pro Sound Design is the art of creating, manipulating, and layering audio elements to enhance music, film, or media. It adds depth, emotion, and realism through crafted effects, textures, and atmospheres.",
      image: "/servicesIcons/icon4.png",
      link1: "/pro-sound-design",
    },
    {
      title: "Pro Audio Mixing",
      desc: "Pro Audio Mixing is the process of blending individual audio tracks—vocals, instruments, and effects—by adjusting levels, panning, EQ, and dynamics to create a balanced, cohesive, and professional-sounding final mix.",
      image: "/servicesIcons/icon5.png",
      link1: "/pro-audio-mixing",
    },
    {
      title: "Pro Audio Mastering",
      desc: "Pro Audio Mastering is the final step in music production, enhancing the overall sound, consistency, and loudness of a track. It ensures clarity, balance, and readiness for distribution across all playback systems.",
      image: "/servicesIcons/icon6.png",
      link1: "/pro-audio-mastering",
    },
    {
      title: "Music Distribution",
      desc: "Music Distribution delivers finished tracks to streaming platforms and stores, helping artists reach global audiences, increase visibility, and generate revenue through digital music channels.",
      image: "/servicesIcons/icon7.png",
      link1: "/music-distribution",
    },
    {
      title: "Video Production",
      desc: "Video Production involves planning, filming, and editing visual content to create engaging videos for music, branding, or storytelling, enhancing an artist's or brand’s impact and reach.",
      image: "/servicesIcons/icon8.png",
      link1: "/video-production",
    },
    {
      title: "Music Promotion",
      desc: "Music Promotion involves strategic marketing to increase an artist’s visibility, using social media, campaigns, and platforms to reach audiences, grow fanbases, and boost track performance.",
      image: "/servicesIcons/icon9.png",
      link1: "/pro-music-production",
    },
    {
      title: "Artist Management & PR",
      desc: "Artist Management oversees an artist’s career, handling bookings, branding, promotions, and business decisions to ensure growth, exposure, and long-term success in the music industry.",
      image: "/servicesIcons/icon10.png",
      link1: "/artist-management",
    },
  ];

  const servicesWrapperStyle = {
    backgroundColor: '#fff000',
    padding: isMobile ? '2rem 1rem' : '4rem 2rem',
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    lineHeight:'20px'
  };

  const headingStyle = {
    fontSize: isMobile ? '2rem' : '90px',
    fontWeight: 'bold',
    marginBottom: '1rem',
    textAlign: 'center',
   
  };

  const subheadingStyle = {
    fontSize: isMobile?'20px':'30px',
    marginBottom: '4rem',
    textAlign: 'center',
  };

  const gridStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    maxWidth: '1300px',
  };

  const cardStyle = {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    padding: '1.5rem',
    borderRadius: '16px',
    width: isMobile ? '90%' : '260px',
    boxShadow: `0 8px 32px rgba(0, 0, 0, 0.25), 0 16px 48px rgba(0, 0, 0, 0.15), 0 4px 6px rgba(0, 0, 0, 0.1)`,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.3)',
  };

  const iconBoxStyle = {
    border: '1px solid #000',
    width: isMobile ? '80%' : '234px',
    height: isMobile ? '180px' : '234px',
    marginBottom: '1rem',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const iconImageStyle = {
    width: '60%',
    height: 'auto',
    objectFit: 'contain',
  };

  const titleStyle = {
    fontWeight: 'bold',
    marginBottom: '0.5rem',
    fontSize: '21px',
    color: '#000',
    fontFamily: 'Crimson Text',
    textAlign: 'left',
    width: '100%',
  };

  const descStyle = {
    fontSize: '13px',
    color: '#444',
    marginBottom: '1.5rem',
    fontFamily: 'Inter',
    textAlign: 'left',
    width: '100%',
  };

  const buttonStyle = {
    padding: '0.5rem 1.3rem',
    border: 'none',
    margin: '5px 0',
    backgroundColor: '#000',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    alignSelf: 'flex-start',
  };

  return (
    <div style={servicesWrapperStyle}>
      <h2 style={headingStyle}>Services We Offer</h2>
      <p style={subheadingStyle}>"From Sound to Stage - We Make It Happen."</p>
      <div style={gridStyle}>
        {services.map((service, index) => (
          <div key={index} style={cardStyle}>
            <div style={iconBoxStyle}>
              <img src={service.image} alt={service.title} style={iconImageStyle} />
            </div>
            <hr style={{ width: "100%", border: "1px solid #000", margin: "10px 0" }} />
            <div style={titleStyle}>{service.title}</div>
            <div style={descStyle}>{service.desc}</div>
            <button
              style={buttonStyle}
              onClick={() => {
                navigate(service.link1, {
                  state: { service },
                });
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
            >
              Further Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterServices = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const wrapperStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: isMobile ? '2rem 1rem' : '2rem',
    backgroundColor: '#ffffff',
    fontFamily: 'Plus Jakarta Sans',
  };

  const boxStyle = {
    maxWidth: '900px',
    textAlign: 'center',
    borderRadius: '4px',
    backgroundColor: '#ffffff',
  };

  const titleStyle = {
    fontSize: isMobile ? '2.5rem' : '60px',
    fontWeight: '700',
    marginBottom: '1rem',
    fontFamily: 'Helvetica Neue, sans-serif',
    color: '#000000',
  };

  const descriptionStyle = {
    fontSize: isMobile ? '1rem' : '18px',
    color: '#333333',
    lineHeight: '1.6',
    fontFamily: 'Helvetica Neue, sans-serif',
    padding: isMobile ? '0 10px' : '0',
  };

  return (
    <>
      <div style={wrapperStyle}>
        <div style={boxStyle}>
          <h1 style={titleStyle}>The Chordifiers Studio</h1>
          <p style={descriptionStyle}>
            The Chordifiers Studio provides an extensive suite of professional services designed to support artists and creators through every stage of their musical journey. Our offerings include Pro Music Composition, Audio Recording, Editing & Arrangement, Sound Design, Mixing and Mastering, ensuring technical excellence and artistic integrity. Additionally, we offer comprehensive solutions in Music Distribution, Video Production, Music Promotion, and Artist Management, delivering strategic guidance and industry expertise to foster sustainable growth and global recognition.
          </p>
        </div>
      </div>
      <ServicesWeOffer />
    </>
  );
};

export default FooterServices;
