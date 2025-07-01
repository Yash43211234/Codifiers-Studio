
import React, { useState } from 'react';
import ProfessionalCertificationCourses from "../institute/ProfessionalCertificationCourses"
import TCMISection from '../institute/TCMISection'

const Institute = () => {
   const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <>
      <div >
        {!isVideoLoaded && (
          <div className="hero-section">
            <div className="overlay" />
            <div className="hero-content">
              <img
                src="tcs.png"
                alt="Chordifiers Logo"
                className="hero-logo"
              />
              <span className="One_One_Page_Header">
                <p style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.4)' }}>
                  Your Record Label, Production House <br /> & Music Institute
                </p>
              </span>
              <span className="One_One_Page_Header_p">
                <p>"You Love being Creative? We Love You"</p>
              </span>
            </div>
          </div>
        )}

        {/* Video appears after it's loaded */}
        <video
          src="video1.mp4"
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setIsVideoLoaded(true)}
          style={{
            display: isVideoLoaded ? 'block' : 'none',
            width: '100%',
            height: '100vh',
            objectFit: 'cover',
            border: 'none',
            outline: 'none'
          }}
        />
      </div>

      <TCMISection />
      <ProfessionalCertificationCourses />
    </>
  )
}

export default Institute