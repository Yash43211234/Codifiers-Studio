import React from 'react'

function Institute() {

   const cardData = [
    { level: 'Basic', color: 'yellow' },
    { level: 'Intermediate', color: 'orange' },
    { level: 'Advance', color: 'red' },
    { level: 'Pro', color: 'purple' },
  ];


   const wrapperStyle = {
    backgroundColor: "#0d0d0d",
    color: "#ffffff",
    minHeight: "100vh",
    padding: "50px 20px",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    textAlign: "center",
    fontSize: "3rem",
    marginBottom: "30px",
  };

  const bannerStyle = {
    backgroundColor: "#ffeb3b",
    color: "#000",
    padding: "15px 30px",
    borderRadius: "8px",
    textAlign: "center",
    margin: "0 auto 50px",
    maxWidth: "600px",
    fontWeight: "bold",
  };

  const courseContainerStyle = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "30px",
  };

  const cardStyle = {
    backgroundColor: "#111",
    border: "1px solid #333",
    borderRadius: "8px",
    width: "220px",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: "20px",
  };

  const imageStyle = {
    width: "100%",
    height: "150px",
    objectFit: "cover",
  };

  const titleStyle = {
    fontSize: "1.2rem",
    fontWeight: "bold",
    margin: "10px 0",
    textAlign: "center",
  };

  const faqStyle = {
    width: "90%",
    marginTop: "10px",
    backgroundColor: "#000",
    color: "#fff",
    border: "1px solid #555",
    padding: "10px",
    borderRadius: "6px",
    fontSize: "0.9rem",
    cursor: "pointer",
  };

  const courses = ["Basic", "Intermediate", "Advance", "Pro"];
  const faqs = [
    "How long do the courses last?",
    "How long is each class?",
    "Are the courses online or offline?",
    "Will I receive a certificate after completion?",
  ];
  return (
    <div>


<div style={wrapperStyle}>
      <h1 style={headingStyle}>Music Production Courses</h1>
      <div style={bannerStyle}>
        Limited Seats Available <br />
        <span style={{ fontWeight: "normal" }}>Get your seat as soon as possible!</span>
      </div>

      <div style={courseContainerStyle}>
        {courses.map((level) => (
          <div style={cardStyle} key={level}>
            <img
              src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/6b4070149bdac4019d250fb80cf8b1ac22aa0816+(3).jpg"
              alt={`${level} course`}
              style={imageStyle}
            />
            <div style={titleStyle}>Music Production {level}</div>
            {faqs.map((faq, idx) => (
              <div style={faqStyle} key={idx}>
                {faq} ▼
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>


{/* +++++++++++++++++++++++++++++ */}
      <div style={{ marginTop:'70px', padding: '40px', fontFamily: 'Georgia, serif', color: '#000' }}>
        <h1 style={{ fontSize: '36px', textAlign: 'left', marginBottom: '10px' }}>
          Professional Certification Courses
        </h1>
        <p style={{ textAlign: 'left', marginBottom: '40px', fontSize: '16px' }}>
          tailored to bring the best out of you!!
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '30px', flexWrap: 'wrap' }}>

          {/* Card 1 */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '320px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '24px' }}>1</h2>
            <img src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/f4bd6278ead53791e7894a175d53284e928646ac+(1).png" alt="Music Production" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>Music Production Courses</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Unlock your creative potential with our <strong>Music Production Courses</strong>, designed for aspiring producers, DJs, and musicians of all skill levels. Whether you're a beginner eager to learn the basics or an experienced artist looking to refine your techniques, our courses cater to all.
            </p>
          </div>

          {/* Card 2 */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '320px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '24px' }}>2</h2>
            <img src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/1a04f11d7b12a9d1905951f0531a419e72116745+(1).png" alt="Instrument Courses" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>Instrument Courses</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Master the art of playing your favorite instrument with our expertly designed <strong>Instrument Courses</strong>, perfect for beginners, hobbyists, and aspiring professionals. Whether you're strumming a guitar, rocking out on the drums, or playing classical pieces on the piano, we have the right course to match your goals and passion.
            </p>
          </div>

          {/* Card 3 */}
          <div style={{ flex: '1', minWidth: '280px', maxWidth: '320px', textAlign: 'left' }}>
            <h2 style={{ fontSize: '24px' }}>3</h2>
            <img src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/f4bd6278ead53791e7894a175d53284e928646ac+(1).png" alt="Music Business" style={{ width: '100%', height: 'auto', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '18px', margin: '10px 0' }}>Music Business Course</h3>
            <p style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Turn your passion for music into a thriving career with our <strong>Music Business Course</strong>. Designed for artists, managers, and industry professionals, this course equips you with the knowledge and tools to navigate the dynamic world of the music industry, build your brand, and achieve sustainable success.
            </p>
          </div>
        </div>
      </div>

{/* +++++++++++++ */}






      {/* ++++++++++++++++++++ */}
      <div
      style={{
        backgroundColor: '#f4df1e',
        padding: '50px 0',
        textAlign: 'center',
        fontFamily: 'Georgia, serif',
      }}
    >
      <h1 style={{ fontSize: '40px', marginBottom: '40px' }}>Instrument Courses</h1>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {/* Card 1 - Guitar */}
        <div
          style={{
            width: '260px',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'left',
          }}
        >
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/48852ceaa557c6bc6cf849492573c34ad0d14d89.png"
            alt="Guitar"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '16px' }}>Guitar</h3>
            <p style={{ fontSize: '13px', marginBottom: '15px' }}>
              Tailored lessons for all skill levels, helping you master guitar at your own pace.
            </p>
            <button
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                border: '1px solid black',
                backgroundColor: 'white',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Card 2 - Drums */}
        <div
          style={{
            width: '260px',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'left',
          }}
        >
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/8299e523ccec8e6e55c8239b5aebadd3328fce5f.png"
            alt="Drums"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
          <div style={{ padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '16px' }}>Drums</h3>
            <p style={{ fontSize: '13px', marginBottom: '15px' }}>
              Drum lessons for all levels, tailored to your needs, available online or in person with expert instructors.
            </p>
            <button
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                border: '1px solid black',
                backgroundColor: 'white',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              View Details
            </button>
          </div>
        </div>

        {/* Card 3 - Piano */}
        <div
          style={{
            width: '260px',
            backgroundColor: 'white',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'left',
          }}
        >
          <img
            src="https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/3055d8b7857b1bd22ed801e4d2d144c3dfbe18f9.png"
            alt="Piano"
            style={{ width: '100%', height: '160px', objectFit: 'cover' }}
          />
          
          <div style={{ padding: '15px' }}>
            <h3 style={{ margin: '0 0 10px', fontSize: '16px' }}>Piano / Keyboard</h3>
            <p style={{ fontSize: '13px', marginBottom: '15px' }}>
              Personalized piano lessons for all levels, available online or in person with expert instructors.
            </p>
            <button
              style={{
                fontSize: '12px',
                padding: '6px 12px',
                border: '1px solid black',
                backgroundColor: 'white',
                cursor: 'pointer',
                borderRadius: '4px',
              }}
            >
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>

      


    </div>
  )
}

export default Institute