
import ImageCarousel from '../components/ImageCarousel ';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';


const gallerySection = {
  padding: "20px",
  textAlign: "center",
};

const galleryTitle = {
  fontSize: "2rem",
  marginBottom: "8px",
};

const gallerySubtitle = {
  maxWidth: "00px",
  margin: "0 auto 20px",
};

const gridContainer = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "15px",
};

const viewMoreBtn = {
  marginTop: "20px",
  padding: "10px 20px",
  fontSize: "1rem",
  cursor: "pointer",
  borderRadius: "5px",
  border: "none",
  backgroundColor: "#007BFF",
  color: "#fff",
};
  

const images = [
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/87284b8c9ea35499751a7d8ee3d1cde0455e5c46.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/225f634a885ea8917b80f7d57b48c05ef5e206ec.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/87284b8c9ea35499751a7d8ee3d1cde0455e5c46.jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/fc8caa80c3fa6c47e578f7973c020161f59b5819+(1).jpg",
  "https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4539f9ab6535a9d947d9348ef2d084f25e263d9b.jpg",

];

export default function LandingPage() {
  const getRandomYOffset = () => Math.floor(Math.random() * 41) - 20;
  const navigate = useNavigate();


  const handleJoinClick = () => {
    navigate('/query'); // 👈 change '/institute' to your actual route if needed
  };


 const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);


const isMobile = screenWidth < 768;

  const sectionStyle = {
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    padding: '60px 20px',
    textAlign: 'center'
  };

  const headingStyle = {
    fontSize: '28px',
    fontWeight: 'bold',
    marginBottom: '10px',
    textTransform: 'uppercase'
  };

  const descriptionStyle = {
    color: '#ccc',
    fontSize: '14px',
    maxWidth: '800px',
    margin: '0 auto 40px',
    lineHeight: '1.6'
  };

  const artistBlock = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '30px',
    flexWrap: 'wrap',
    marginBottom: '60px'
  };

  const artistImg = {
    width: '300px',
    borderRadius: '8px'
  };

  const artistTextBlock = {
    maxWidth: '400px',
    textAlign: 'left'
  };

  const artistName = {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const artistDesc = {
    fontSize: '14px',
    color: '#ccc',
    lineHeight: '1.5',
    fontFamily: 'roboto'
  };

  const gallerySection = {
    backgroundColor: '#fff',
    padding: '60px 20px',
    color: '#000',
    textAlign: 'center'

  };

  const galleryTitle = {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px'
  };

  const gallerySubtitle = {
    fontSize: '14px',
    color: '#444',
    marginBottom: '30px',
    maxWidth: '600px',
    marginLeft: 'auto',
    marginRight: 'auto'
  };

  const gridContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '15px',
    maxWidth: '900px',
    margin: '0 auto'
  };

  const galleryImage = {
    width: '100%',
    borderRadius: '10px',
    objectFit: 'cover'
  };

  const viewMoreBtn = {
    marginTop: '30px',
    padding: '10px 20px',
    borderRadius: '30px',
    backgroundColor: '#f4e409',
    color: '#000',
    fontWeight: 'bold',
    border: 'none',
    cursor: 'pointer'
  };



  return (
    <div>
      {/* HERO SECTION */}
      <div className="hero-section">
        <div className="overlay" />
        <div className="hero-content">
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4d9261216de606e1cb701ad4448c05c248a6e160+(1).png"
            alt="Chordifiers Logo"
            className="hero-logo"
          />
          <span className="One_One_Page_Header">
            <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
              Your Record Label, Production House <br /> & Music Institute
            </p>
          </span>

          <span className="One_One_Page_Header_p"><p>"You Love being Creative? We Love You"</p></span>
        </div>
      </div>

      <div
        style={{
          padding: window.innerWidth < 600 ? '20px' : '40px',
          fontFamily: "'Orbitron', sans-serif",
          textAlign: 'center',
          background:'#fff9f9'

        }}
      >
        <h2 style={{
          fontFamily: "Null-Free",
          fontSize: window.innerWidth < 600 ? '32px' : '54px',
          margin: '20px 0',
          fontWeight: 'Exile',
        }}>
          <img
            src="one11mainlogo.png" // path to your image
            alt="The ONE11 Show"
            style={{
              width: window.innerWidth < 600 ? '200px' : '356px',
              margin: '-30px 0',
            }}
          />
        </h2>



        <p
          style={{
            fontSize: window.innerWidth < 600 ? '14px' : '18px',
            lineHeight: '1.5',
            margin: window.innerWidth < 600 ? '26px 0px 10px 0px' : '20px auto',
            maxWidth: '800px',
          }}
        >
          <strong>“The One11 Show”</strong> is an artist launch platform by The Chordifiers Studio, that focuses on
          launching artists and creators of various niches into the world.
        </p>

        <div style={{ margin: window.innerWidth < 600 ? '20px 0' : '30px 0' }}>
          <ImageCarousel />
        </div>

        <h3
          style={{
            fontSize: window.innerWidth < 600 ? '16px' : '22px',
            margin: window.innerWidth < 600 ? '10px 0' : '20px 0',
          }}
        >
          Click here to register for
          <br />
          “The ONE11 Show”
        </h3>

        <button
          onClick={() => navigate('/one11register')}
          style={{
            backgroundColor: '#111',
            color: '#fff',
            padding: window.innerWidth < 600 ? '10px 20px' : '12px 30px',
            fontSize: window.innerWidth < 600 ? '14px' : '16px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Register Now
        </button>
      </div>



















      {/* +++++++++++++++++++ */}
      {/* MUSIC CAREER + SERVICES SECTION */}
     <div
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: isMobile ? '20px' : '40px 200px',
        gap: '20px',
        flexWrap: 'wrap',
        boxSizing: 'border-box',
        background: '#F0E81B',
      }}
    >
      {/* Left Side */}
      <div
        style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: isMobile ? '100%' : '50%',
          boxSizing: 'border-box',
          textAlign: isMobile ? 'center' : 'left',
        }}
      >
        <p
          style={{
            fontSize: isMobile ? '22px' : '28px',
            marginBottom: '20px',
            lineHeight: '1.4',
          }}
        >
          Are you ready to take your<br /> Music Career to the next level?
        </p>
        <p
          style={{
            fontSize: '16px',
            lineHeight: '1.6',
            marginBottom: '20px',
          }}
        >
          Our team of industry professionals are here to guide you through every
          step of your music journey and provide you with tailored guidance,
          mentorship and strategies personalized for your success.
        </p>
        <button
          onClick={handleJoinClick}
          style={{
            backgroundColor: '#000',
            color: '#fff',
            padding: isMobile ? '10px 20px' : '12px 24px',
            border: 'none',
            borderRadius: '20px',
            cursor: 'pointer',
            fontSize: '16px',
          }}
        >
          Join Us
        </button>
      </div>

      {/* Right Side */}
      <div
        style={{
          flex: '1',
          minWidth: '300px',
          maxWidth: isMobile ? '100%' : '50%',
          boxSizing: 'border-box',
          textAlign: 'center',
        }}
      >
        <img
          src="piano.jpg"
          alt="Music Career Visual"
          style={{
            width: '100%',
            maxWidth: '508px',
            height: 'auto',
          }}
        />
      </div>
    </div>


      {/* ++++++++++++++++++++++*/}

      <div
        style={{

          display: 'flex',
          flexDirection: window.innerWidth < 768 ? 'column' : 'row',
          justifyContent: 'center',
          alignItems: 'center',
          padding: window.innerWidth < 768 ? '40px 20px' : '60px 20px',
          fontFamily: 'Georgia, serif',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
          textAlign: window.innerWidth < 768 ? 'center' : 'left',
        }}
      >
        {/* Left Side - Image */}
        <div
          style={{
            flex: '1 1 300px',
            padding: '20px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <img
            src="diskone.jpg"
            alt="Star Music"
            style={{
              width: '100%',
              maxWidth: '350px',
              height: 'auto',
              borderRadius: '20px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            }}
          />
        </div>

        {/* Right Side - Text */}
        <div
          style={{
            flex: '1 1 400px',
            padding: '20px',
            maxWidth: '600px',
          }}
        >
          <h1
            style={{
              fontSize: window.innerWidth < 768 ? '30px' : '40px',
              color: '#000',
              marginBottom: '20px',
              fontFamily: 'auto'
            }}
          >
            Looking for Pro Music Services?
          </h1>
          <p
            style={{
              fontSize: '16px',
              color: '#111',
              lineHeight: '1.6',
              marginBottom: '30px',
              fontFamily: 'sans-serif'
            }}
          >
            Schedule a free consultation to discuss your musical aspirations and dreams. <br />
            We analyze your goals, advise you on the best approach, and explain our process.
          </p>
          <button
            onClick={() => window.open('https://wa.me/917811092672', '_blank')}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '12px 24px',
              borderRadius: '999px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Know more
          </button>
        </div>
      </div>


      {/* +++++++++++++++++++++++++++++++ */}


      <div style={sectionStyle}>
        <h2 style={headingStyle}>OUR LATEST SIGNED ARTIST</h2>
        <p style={descriptionStyle}>
          Meet the newest talent to join our creative family. With a unique sound and undeniable passion, this artist is set to make waves in the music industry. Stay tuned for their upcoming releases, exclusive performances, and more as they embark on an exciting journey with us.
        </p>

        {/* Artist 1 */}
        <div style={artistBlock}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/bb0cfb4651b4fd60bd61928cd0d593ab6c731d0a+(1).jpg"
            alt="MizzieLmb"
            style={artistImg}
          />
          <div style={artistTextBlock}>
            <h3 style={artistName}>MizzieLmb</h3>
            <p style={artistDesc}>
              is a talented artist from Zimbabwe, celebrated for her strong voice and electrifying energy. As part of The Chordifiers Studio, she’s redefining music with her unique approach. Don’t miss her latest creations!
            </p>
          </div>
        </div>

        {/* Artist 2 */}
        <div style={{ ...artistBlock, flexDirection: 'row-reverse' }}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/23f4e11a55b906a4310e045982373adcbcdbef9a.jpg"
            alt="Sweta"
            style={artistImg}
          />
          <div style={artistTextBlock}>
            <h3 style={artistName}>Sweta</h3>
            <p style={artistDesc}>
              a rising artist from Kurseong, is known for her heartfelt and soothing voice. Proudly representing The Chordifiers Studio, she’s bringing fresh energy to the music scene. Stay tuned for her upcoming projects!
            </p>
          </div>
        </div>

        {/* Artist 3 */}
        <div style={artistBlock}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/ddd2b1b879f16ccc4ece2ec94c7d7b6abb4f315d.jpg"
            alt="Divas"
            style={artistImg}
          />
          <div style={artistTextBlock}>
            <h3 style={artistName}>Diyaan</h3>
            <p style={artistDesc}>
              is a artist from Kashmir, known for their unique sound and captivating music. Representing The Chordifiers Studio, he is making waves from his heart out. Stay tuned for their latest hits!
            </p>
          </div>
        </div>



      </div>

      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#ffffff', // optional
          padding: '20px 0',
        }}
      >
        <img
          src="/curveImage.jpg" // replace with your image URL
          alt="Banner"
          style={{
            width: '100%',
            maxWidth: '100%',
            height: 'auto',
            display: 'block',
            marginTop: '-24px',
            border: 'none'
          }}
        />
      </div>

      {/* Photo Gallery */}

      <div style={gallerySection}>


        <div className="responsive-grid">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${index + 1}`}
              style={{
                height: "180px",
                width: "150px",
                borderRadius: "8px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                cursor: "pointer",
                transform: `translateY(${getRandomYOffset()}px)`,
                transition: "transform 0.3s ease",
                display: "block",
                objectFit: "cover",
              }}
            />
          ))}
        </div>


        <style>
          {`
  .responsive-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 16px;
  }

  @media (max-width: 768px) {
    .responsive-grid {
      grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
      gap: 12px;
    }
  }
`}
        </style>




















        <div style={{
          textAlign: 'left',
          display: 'flex',
          flexDirection: 'column',
          padding: '50px',
          gap: '20px',
          padding: '0px',
          marginTop: '23px',
          maxWidth: '600px'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', margin: 0 }}>PHOTO GALLERY</h2>
          <p style={{
            fontSize: '16px',
            color: '#555',
            lineHeight: '1.5',
            margin: 0
          }}>
            Explore moments from the production studio to crowds on tour. Glimpses
            that define our artist journey and their on-stage presence.
          </p>

          <button
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '12px 6px',
              borderRadius: '30px',
              border: 'none',
              fontWeight: 'bold',
              cursor: 'pointer',
              fontSize: '16px',
              width: 'fit-content',
              marginTop: '20px'
            }}
            onClick={() => navigate('/one_one/upcoming')}
          >
            View More
          </button>
        </div>

      </div>


      {/* +++++++++++++++++++++WHERE EVER NOTE++++++++++++++ */}

      <style>
        {`
  .responsive-banner {
    background-color: #f0e924;
    width: 98.4%;
    padding: 40px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .responsive-banner p {
    font-size: 1.8rem;
    font-weight: 400;
    color: #000000;
    text-align: center;
    font-family: sans-serif;
    margin: 0;
  }

  @media (max-width: 768px) {
    .responsive-banner {
      padding: 20px 10px;
       width: 94.4%;
    }

    .responsive-banner p {
      font-size: 1.2rem;
    }
  }
`}
      </style>
      <div className="responsive-banner">
        <p>Where every note resonate with passion</p>
      </div>




      <div className="insight-container">
      {/* Row: Two Columns */}
      <div className="insight-row">
        {/* Left Column */}
        <div className="insight-left">
          <h1 className="insight-title">
            Discover <br /> our <br /> key insights
          </h1>
          <p className="insight-subtitle">
            Diving into the metrics behind our success: a detailed <br />
            look at the key factors driving our achievements in the <br />
            music industry.
          </p>
          <button className="insight-button" onClick={() => navigate('/one_one/upcoming')}>
            More Information
          </button>
        </div>

        {/* Right Column */}
        <div className="insight-right">
          <div className="insight-card card-black">
            <div className="card-heading">12k</div>
            <div className="card-subheading">Music Management Service</div>
            <p className="card-text">
              Explore a wide range of effective and impactful <br />
              promotional options.
            </p>
          </div>

          <div className="insight-card card-yellow">
            <div className="card-heading">72%</div>
            <div className="card-subheading">More opportunities</div>
            <p className="card-text">
              Elevate your music career with an influx of new <br />
              opportunities.
            </p>
          </div>
        </div>
      </div>

      {/* Media styles */}
      <style>
        {`
          .insight-container {
            font-family: Georgia, serif;
            padding: 50px 220px;
            background-color: #fff;
            text-align: center;
          }

          .insight-row {
            display: flex;
            flex-wrap: wrap;
            gap: 40px;
            margin-bottom: 40px;
            justify-content: space-between;
          }

          .insight-left {
            flex: 1 1 45%;
            min-width: 280px;
            text-align: left;
          }

          .insight-title {
            font-size: 42px;
            color: #111;
            margin-bottom: 20px;
            line-height: 1.2;
          }

          .insight-subtitle {
            font-size: 18px;
            color: #555;
            line-height: 1.6;
            margin-bottom: 30px;
          }

          .insight-button {
            background-color: #f1e40b;
            border: none;
            padding: 10px 25px;
            border-radius: 20px;
            font-weight: bold;
            cursor: pointer;
            font-size: 16px;
          }

          .insight-right {
            flex: 1 1 50%;
            min-width: 280px;
            display: flex;
            flex-direction: column;
            gap: 20px;
            width: 339px;
          }

          .insight-card {
            border-radius: 6px;
            padding: 25px;
          }

          .card-black {
            background-color: #000;
            color: #fff;
          }

          .card-yellow {
            background-color: #f1e40b;
            color: #111;
          }

          .card-heading {
            font-size: 36px;
            font-weight: bold;
          }

          .card-subheading {
            font-size: 18px;
            font-weight: bold;
            margin-top: 10px;
          }

          .card-text {
            margin-top: 10px;
            font-size: 14px;
            line-height: 1.5;
          }

          @media (max-width: 768px) {
            .insight-container {
              padding: 40px 20px;
              text-align: center;
            }

            .insight-left {
              text-align: center;
            }

            .insight-title {
              font-size: 32px;
            }

            .insight-subtitle {
              font-size: 16px;
            }

            .insight-right {
              width: 100%;
              align-items: center;
            }

            .card-heading {
              font-size: 28px;
            }

            .card-subheading {
              font-size: 16px;
            }

            .card-text {
              font-size: 13px;
            }
          }
        `}
      </style>
    </div>



      {/* ================== */}
      <div
        style={{
          backgroundColor: '#fcee09',
          padding: '60px 20px',
          textAlign: 'center',
          fontFamily: 'Georgia, serif',
        }}
      >
        <h1 style={{ fontSize: '3rem', margin: '0 0 20px' }}>The Chordifiers Studio</h1>
        <p style={{ fontSize: '1rem', marginBottom: '10px' }}>
          Client Rating (+50 on Google Maps)
        </p>
        <div style={{ fontSize: '1.2rem', marginBottom: '20px', color: '#000' }}>
          ★★★★★
        </div>
        <div
          style={{
            display: 'inline-block',
            backgroundColor: '#fff',
            padding: '10px 20px',
            borderRadius: '999px',
            fontSize: '1rem',
            color: '#000',
            boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
          }}
        >
          Want to book a studio session?{' '}
          <span onClick={() => navigate('/one_one/upcoming')}
            style={{
              backgroundColor: '#fcee09',
              padding: '2px 8px',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 'bold',
              cursor: 'pointer'
            }}
          >
            See More
          </span>
        </div>
      </div>




      {/* +++++++++++++++++++++++++++ */}
      <div
        style={{
          backgroundImage: 'url("https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4efcc2c0-8d10-4ae2-949f-1c29e20cc45e.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '40px 20px',
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
            border: '3px solid #0080ff',
            borderRadius: '8px',
            padding: '20px',
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
          }}
        >
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: '#000' }}>
            I would like to recommend "The Chordifiers Studio" to everyone. Here satisfaction is guaranteed with utmost
            priority with reasonable pricing. The zeal and enthusiasm shown by the members are well exemplary.
          </p>
          <div style={{ marginTop: '20px' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png"
              alt="User Avatar"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                marginBottom: '8px',
              }}
            />
            <div style={{ fontWeight: 'bold', fontSize: '0.9rem', color: '#333' }}>Sambid Dutta</div>
          </div>
        </div>
      </div>





      {/* +++++++++++++++++++++++++++ */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#111',
          color: '#fff',
          padding: '40px 60px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ maxWidth: '100%' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '10px' }}>
            Want to become a <span style={{ fontWeight: '600' }}>Music Producer</span>?
          </h2>
          <p style={{ fontSize: '1rem', color: '#ccc' }}>
            We’ll help you to amplify your career and reach new heights.
          </p>
        </div>


        <button onClick={() => navigate('/one_one/upcoming')}
          style={{
            backgroundColor: '#fcee09',
            color: '#000',
            fontWeight: '600',
            fontSize: '1rem',
            border: 'none',
            borderRadius: '999px',
            padding: '12px 30px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Apply
        </button>
      </div>


      <style>{`
       .hero-section {
  position: relative;
  height: 962px;
  background-image: url('https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/3bb25b2526519f66c08b0cb47e42ad5d8cbd3adf.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* This keeps the background image fixed */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}


        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.6);
          z-index: 10;
         
        }

        .hero-content {
          position: relative;
          z-index: 2;

        }

        .hero-logo {
      
         width: 349px;
            height: 349px;
          border-radius: 50%;
          background-color: black;
          object-fit: contain;
          margin-bottom: 20px;
        }

        h1, h2, h3 {
          font-family: 'Arial Black', sans-serif;
        }
        h1{
          font-size:30px;
        }
        .One_One_Page_Header {
          font-size:40px;
        }
        .One_One_Page_Header_p{
          font-size:17px;
        }

        .one11-section {
          padding: 50px 20px ;
          background: #f9e300;
          text-align: center;
        
        }

        .one11-section h2{
          font-size:40px;
          
        }
        .one11-section p{
          font-size:25px;
        padding:0 200px;
         
        }
         .one11-section h3{
          font-size:30px;
          
        }
           .one11-section button{
          font-size:30px;
          
        }
        .cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin: 30px 0;
          flex-wrap: wrap;
        }

        .cards img {
          width: 200px;
          height: auto;
          border-radius: 10px;
        }

        .music-career-section, .pro-services-section {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 50px 20px;
          gap: 40px;
        }

        .music-career-section .left,
        .pro-services-section .right {
          flex: 1;
        }

        .music-career-section .right img,
        .pro-services-section .left img {
          max-width: 100%;
          border-radius: 10px;
        }

        .btn-dark {
          background-color: black;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 1rem;
          margin-top: 15px;
        }

        @media (max-width: 768px) {
          .music-career-section,
          .pro-services-section {
            flex-direction: column;
            text-align: center;
          }

          .cards {
            flex-direction: column;
          }

          .hero-logo {
            width: 175px;
            height: 175px;
          }

          h1 {
            font-size: 1.5rem;
          }


          /* Base styles already handled by your inline styles */

@media screen and (max-width: 768px) {
  /* Tablets */
  .hero-content h1 {
    font-size: 24px;
  }

  .music-career-section {
    flex-direction: column;
  }

  .music-career-section img {
    max-width: 100%;
  }

  .gallery-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
  }
}

@media screen and (max-width: 480px) {
  /* Phones */
  .hero-content h1 {
    font-size: 20px;
  }

  .music-career-section {
    flex-direction: column;
  }

  .gallery-title {
    font-size: 20px;
  }

  .gallery-subtitle {
    font-size: 12px;
  }

  .btn-dark,
  .view-more-btn {
    width: 100%;
    font-size: 14px;
  }
}

        }
      `}</style>
    </div>
  );
}
