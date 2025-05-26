import React from 'react';
import ImageCarousel from '../components/ImageCarousel ';
import { useNavigate } from 'react-router-dom';


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
    navigate('/institute'); // 👈 change '/institute' to your actual route if needed
  };


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
          <span className="One_One_Page_Header"><p>Your Record Label, Production House <br /> & Music Institute</p></span>
          <span className="One_One_Page_Header_p"><p>"You Love being Creative? We Love You"</p></span>
        </div>
      </div>

      {/* ONE11 SHOW SECTION */}
      <div className="one11-section">
        <h2 style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: '54px',
          textAlign: 'center',
          margin: '20px 0'
        }}>
          The ONE11 Show
        </h2>

        <p><strong>“The One11 Show”</strong> is an artist launch platform by The Chordifiers Studio, that focuses on launching artists and creators of various niches into the world.</p>
        <div>
          <ImageCarousel />
        </div>
        <h3>Click here to register for<br />“The ONE11 Show”</h3>
         <button className="btn-dark" onClick={() => navigate('/one11register')}>
      Register Now
    </button>
      </div>


















      {/* +++++++++++++++++++ */}
      {/* MUSIC CAREER + SERVICES SECTION */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row', // changed from 'column' to 'row'
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '40px',
          gap: '20px',
          flexWrap: 'wrap',
          padding: '0 200px'// allows wrapping on smaller screens
        }}
      >
        {/* Left Side */}
        <div
          style={{
            flex: '1',
            minWidth: '300px',
            maxWidth: '50%',
            boxSizing: 'border-box',
          }}
        >
          <p
            style={{
              fontSize: '28px',

              marginBottom: '20px',
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
            Our team of industry professionals are here to guide you through every step of your music journey and provide you with tailored guidance, mentorship and strategies personalized for your success.
          </p>
          <button
            onClick={handleJoinClick}
            style={{
              backgroundColor: '#000',
              color: '#fff',
              padding: '12px 24px',
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
            maxWidth: '50%',
            boxSizing: 'border-box',
            textAlign: 'center',

          }}
        >
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/a8b709f32e0d0471875d176edce157947a33c467.png"
            alt="Music Career Visual"
            style={{
              width: '100%',
              maxWidth: '600px',
              height: 'auto',
            }}
          />
        </div>
      </div>





      {/* ++++++++++++++++++++++*/}

      <div
        style={{
          backgroundColor: '#f1e40b',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '60px 20px',
          fontFamily: 'Georgia, serif',
          flexWrap: 'wrap'
        }}
      >
        {/* Left Side - Image */}
        <div style={{ flex: '1 1 300px', textAlign: 'center', padding: '20px' }}>
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/e6c328ba531ead0fc89cfd452baf5313246cdb0b.png"
            alt="Star Music"
            style={{
              width: '350px',
              height: '350px',
              borderRadius: '20px',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)'
            }}
          />
        </div>

        {/* Right Side - Text */}
        <div style={{ flex: '1 1 400px', padding: '20px' }}>
          <h1 style={{ fontSize: '40px', color: '#000', marginBottom: '20px' }}>
            Looking for Pro Music Services?
          </h1>
          <p style={{ fontSize: '16px', color: '#111', lineHeight: '1.6', marginBottom: '30px' }}>
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
              cursor: 'pointer'
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
          marginTop:'-24px',
          border:'none'
        }}
      />
    </div>

        {/* Photo Gallery */}

         <div style={gallerySection}>


          <div style={gridContainer}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${index + 1}`}
                style={{
                  // increased width
                  height: "180px",
                  width: "150px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
                  cursor: "pointer",
                  transform: `translateY(${getRandomYOffset()}px)`,
                  transition: "transform 0.3s ease",
                  display: "block",
                  objectFit: 'cover',

                }}
              />
            ))}
          </div>
          <div style={{ testAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding: '50px' }}>
            <div>
              <h2 style={{ textAlign: 'left', fontSize: '32px', fontWeight: 'bold', margin: '0 0 10px 0' }}>PHOTO GALLERY</h2>
              <p style={{ textAlign: 'left', fontSize: '16px', color: '#555', maxWidth: '500px', lineHeight: '1.5', margin: 0 }}>
                Explore moments from the production studio to crowds on tour. Glimpses
                that define our artist journey and their on-stage presence.
              </p>
            </div>

            <div>
              <button
                style={{
                  backgroundColor: '#000',
                  color: '#fff',
                  padding: '12px 24px',
                  borderRadius: '30px',
                  border: 'none',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  fontSize: '16px'
                }}
                onClick={() => navigate('/one_one/upcoming')}  // 👈 Navigation to /upcoming
              >
                View More
              </button>
            </div>
          </div>

        </div>


{/* +++++++++++++++++++++WHERE EVER NOTE++++++++++++++ */}

      <div
        style={{
          backgroundColor: '#f0e924',
          width: '96.84%',
          padding: '40px 20px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{
            fontSize: '1.8rem',
            fontWeight: '400',
            color: '#000000',
            textAlign: 'center',
            fontFamily: 'sans-serif',
            margin: 0,
          }}
        >
          Where every note resonate with passion
        </p>
      </div>



      <div style={{ fontFamily: 'Georgia, serif', padding: '40px', backgroundColor: '#fff', paddingLeft: '200px' }}>
        {/* Row 1 */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '40px', marginBottom: '40px' }}>

          {/* Left: Discovery */}
          <div style={{ flex: '1 1 45%', minWidth: '280px' }}>
            <h1 style={{ fontSize: '42px', color: '#111', marginBottom: '20px', lineHeight: '1.2' }}>
              Discover <br /> our <br /> key insights
            </h1>
            <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', marginBottom: '30px' }}>
              Diving into the metrics behind our success: a detailed <br />
              look at the key factors driving our achievements in the <br />
              music industry.
            </p>
            <button onClick={() => navigate('/one_one/upcoming')}
              style={{
                backgroundColor: '#f1e40b',
                border: 'none',
                padding: '10px 25px',
                borderRadius: '20px',
                fontWeight: 'bold',
                cursor: 'pointer',
                fontSize: '16px'
              }}
            >
              More Information
            </button>
          </div>

          {/* Right: One Div that contains both cards in a row */}
          <div style={{ flex: '1 1 50%', minWidth: '280px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '339px' }}>
              {/* 12k Card */}
              <div style={{
                backgroundColor: '#000',
                color: '#fff',
                padding: '25px',
                borderRadius: '6px'
              }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold' }}>12k</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
                  Music Management Service
                </div>
                <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.5' }}>
                  Explore a wide range of effective and impactful <br />
                  promotional options.
                </p>
              </div>

              {/* 72% Card */}
              <div style={{
                backgroundColor: '#f1e40b',
                color: '#111',
                padding: '25px',
                borderRadius: '6px'
              }}>
                <div style={{ fontSize: '36px', fontWeight: 'bold' }}>72%</div>
                <div style={{ fontSize: '18px', fontWeight: 'bold', marginTop: '10px' }}>
                  More opportunities
                </div>
                <p style={{ marginTop: '10px', fontSize: '14px', lineHeight: '1.5' }}>
                  Elevate your music career with an influx of new <br />
                  opportunities.
                </p>
              </div>
            </div>

          </div>
        </div>



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


        <button onClick={() => navigate('/register')}
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
            width: 90px;
            height: 90px;
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
