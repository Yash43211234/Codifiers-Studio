// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';

export default function Home() {
const [showVideo, setShowVideo] = useState(false);

  // Wait 2 seconds after image is loaded
  const handleImageLoad = () => {
    setTimeout(() => {
      setShowVideo(true);
    }, 2000);
  };



  const styles = {
    container: {
      width: '100%',
      overflow: 'hidden',
      textAlign: 'left',
      paddingTop: '70px',
      animation: 'scroll 20s linear infinite'
    },
    
    image: {
      width: '100%',
      maxWidth: '1440px',
      height: '600px',
      display: 'block',
      margin: '0 auto',
    },

     image: {
      width: '100%',
      height: 'auto',
      display: showVideo ? 'none' : 'block',
    },
    video: {
      width: '100%',
      height: 'auto',
      display: showVideo ? 'block' : 'none',
    },
    heading: {
      fontSize: '8rem',
      position: 'absolute',
      top: '40%',
      left: '34%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'white',
    },
    button: {
      position: 'absolute',
      top: '95%',
      left: '19%',
      transform: 'translate(-50%, -50%)',
      zIndex: 2,
      color: 'black',
      padding: '10px 20px',
      borderRadius: '8px',
      backgroundColor: '#d0fbf9',
      cursor: 'pointer'
    },


    marquee: {
      backgroundColor: 'blue',
      color: 'white',
      padding: '15px 0',
      fontSize: '1.3rem',
      marginTop: '0rem',
      textAlign: 'center',
    },
    button_about_us: {

      marginTop: '1.5rem',
      padding: '10px 20px',
      fontSize: '1rem',
      backgroundColor: 'blue',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer'
    }
  };

  return (
    <>
          <div style={styles.container}>
      <img
        src="https://images.squarespace-cdn.com/content/v1/604269c496c05959fbbb1087/10346aca-7dc6-4387-a29d-d9f7372392c4/80six-+%281%29.jpg"
        alt="Home Banner"
        style={styles.image}
        onLoad={handleImageLoad}
      />

      {showVideo && (
        <video
          src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your video URL
          autoPlay
          muted
          loop
          style={styles.video}
        />
      )}

      <h1 style={styles.heading}>
        <p style={{ margin: 0, lineHeight: '.9' }}>Find your <br /> flow.</p>
      </h1>

      <button style={styles.button}>Reserve your slot</button>
    </div>

      <div>
        <h1 style={styles.marquee}>
          <marquee><p style={{ margin: 0, lineHeight: '1.14' }}>Find your flow.</p></marquee>
        </h1>

        {/* ###############First row###################### */}
        <div style={{ display: 'flex', marginTop: '-14px' }}>
          <div style={{ width: '50%' }}>
            <img
              src="https://i.ytimg.com/vi/NzLcOBuXhYI/maxresdefault.jpg"
              style={{
                width: '100%', height: '700px', objectFit: 'cover'
              }}
              alt="img1"
            />
          </div>
          <div style={{ width: '50%', padding: '10rem', boxSizing: 'border-box', backgroundColor: '#f5f5f5' }}>
            <h2>Who we are</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              At Movement Studio, we’re passionate about creating a supportive and inspiring environment for dancers of all levels. Whether you’re a complete beginner eager to explore the world of modern dance, a seasoned performer looking to refine your technique, or simply someone who finds joy in moving, you’ll find a home here.
            </p>
            <button style={styles.button_about_us}>
              About Us
            </button>
          </div>
        </div>


        {/* ###############Second row###################### */}
        <div style={{ display: 'flex', marginTop: '-28px' }}>
          <div style={{ width: '50%' }}>
            <img
              src="https://img.goodfon.com/wallpaper/big/5/fd/devushka-scena-koncert-t4i.webp"
              style={{
                width: '100%', height: '700px', objectFit: 'cover'
              }}
              alt="img1"
            />
          </div>
          <div style={{ width: '50%', padding: '10rem', boxSizing: 'border-box', backgroundColor: '#f5f5f5' }}>
            <h2>Institue</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Our Classes
              Get your groove on with Hip Hop, find your rhythm in Jazz, and explore connection in Contact Improvisation. Movement Studio offers a diverse range of classes for every dancer.

            </p>
            <button style={styles.button_about_us}>
              Reserve your spot
            </button>
          </div>
        </div>



        {/* ###############third row###################### */}
        <div style={{ display: 'flex', marginTop: '-28px' }}>

          <div style={{ width: '50%', padding: '10rem', boxSizing: 'border-box', backgroundColor: '#f5f5f5' }}>
            <h1>Our Founders</h1>
          </div>

          <div style={{ width: '50%' }}>
            <img
              src="https://images.pexels.com/photos/8512206/pexels-photo-8512206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              style={{
                width: '100%', height: '500px', objectFit: 'cover'
              }}
              alt="img1"
            />
          </div>
        </div>


        {/* ###############forth row###################### */}
        <div style={{ display: 'flex', marginTop: '-28px' }}>

          <div style={{ fontSize: '23px', width: '50%', padding: '2.2rem', boxSizing: 'border-box', backgroundColor: '#f5f5f5' }}>
            <p style={{ fontSize: '35px' }}>"Find your flow, and dance your truth."</p>
            <p>— Sophia Bennett</p>
          </div>

          <div style={{ width: '50%' }}>
            <div style={{ background: '#d900ff', padding: '10px 0 30px 20px', lineHeight: '.5', color: 'white' }}>
              <h1 >Sophia Bennett </h1>
              <p>Founder & Instructo</p>
            </div>
            <div style={{ margin: '-26px 0' }}>
              <img
                src="https://focusphotography.com/wp-content/uploads/2024/11/H2732-Spencer-Cook-125-A-550x367.webp"
                style={{
                  width: '100%', height: '500px', objectFit: 'cover'
                }}
                alt="img1"
              />
            </div>

            <div style={{ background: '#d0fbf9', padding: '25px 0 30px 20px', lineHeight: '.5', color: 'black' }}>
              <h1 >Alisa Morris</h1>Founder & Program Manager
            </div>
          </div>
        </div>


        <div style={{ height: '350px', background: 'blue', color: 'white', padding: '5rem' }}>
          <h2 style={{ fontSize: '40px' }}>Whether you're a beginner looking to explore expressive movement or an advanced dancer ready to refine your technique, we have classes for you! </h2>
          <button style={{ border: 'none', borderRadius: '4px', padding: '10px', backgroundColor: '#d0fbf9' }}>
            Reserve your spot
          </button>
        </div>


        <div style={{ background: '#d0fbf9', color: 'black', padding: '2rem 1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>

            {/* Column 1 */}
            <div style={{ flex: 1, padding: '0 1rem', fontSize: '40px' }}>
              <h2>Codifiers Studio</h2>

            </div>

            {/* Column 2 */}
            <div style={{ flex: 1, padding: '0 1rem' }}>
              <p>Email:</p>
              <p>hello@figma</p>
              <p>Instagram:</p>
              <p>@figma</p>
              <p>Facebook:</p>
              <p>figma</p>
            </div>

            {/* Column 3 */}
            <div style={{ flex: 1, padding: '0 1rem' }}>
              <h3>Address</h3>
              <p>243 Darjeeling</p>
              <p>West Bengal</p>
              <p>(+91) 5689-564-563</p>
              <h3>© Codifiers Studio</h3>
              <p>2025 All Rights Reserved</p>
            </div>

          </div>
        </div>



        <div>
          <div style={{height:'300px', display: 'flex', justifyContent: 'space-between' }}>

            {/* Column 1 */}
            <div style={{background:'#1f41ff' ,flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Our Socials</h2>
            </div>

            {/* Column 2 */}
            <div style={{background:'#000000' , flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Email us</h2>
            </div>

            {/* Column 3 */}
            <div style={{background:'#d900ff' , flex: 1, padding: '0 1rem', color:'white' }}>
              <h2>Book us</h2>
            </div>

          </div>
        </div>

      </div>
    </>
  );
}
