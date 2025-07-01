import React, { useState } from 'react';

const carouselItems = [
  { image: '48.jpg', video: false, title: 'Say It' },
  { image: '37.jpg', video: true, title: 'Yorushika - Snake' },
  { image: '26_10.jpg', video: false, title: 'Art Collage' },
  { image: '48.jpg', video: false, title: 'Say It Again' },
  { image: '37.jpg', video: true, title: 'Another Track' },
  { image: '26_10.jpg', video: false, title: 'Still Art' },
  { image: '48.jpg', video: false, title: 'Final Say' },
  { image: '37.jpg', video: true, title: 'Music Again' },
  { image: '26_10.jpg', video: false, title: 'Last Frame' },
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - 1 + carouselItems.length) % carouselItems.length
    );
  };

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push(carouselItems[index]);
    }
    return items;
  };

  const visibleItems = getVisibleItems();

  return (
    <div style={styles.carouselWrapper}>
      {/* Controls */}
      <div className="topRightControls">
        <button onClick={nextSlide} className="topBtn">
          <span className="arrow leftArrow" style={{ marginRight: '10px' }}><img src='Like_the_arrow1.png'/></span>
          <span className="label">NEXT</span>
        </button>
        <div className="separator"></div>
        <button onClick={prevSlide} className="topBtn">
          <span className="label">PREV</span>
          <span className="arrow rightArrow"><img src='Like_the_arrow.png'/></span>
        </button>
      </div>

      <div style={styles.viewport}>
        <div style={styles.track}>
          {visibleItems.map((item, index) => {
            const isCenter = index === Math.floor(visibleCount / 2);
            return (
              <div
                key={index}
                style={{
                  ...styles.card,
                  zIndex: isCenter ? 2 : 1,
                }}
                className="carousel-card"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className={`carousel-image ${isCenter ? 'center-image' : ''}`}
                  style={{
                    ...styles.image,
                    width: isCenter ? '645px' : '100%',
                  }}
                />
                {isCenter && (
                  <div className="overlay-content">
                    <div className="play-button"><svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.5" d="m5 3l16 9l-16 9z"/></svg></div>
                    {/* <div className="image-title">{item.title}</div> */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Carousel Styles */}
      <style>
  {`
    .carousel-image {
      transition: transform 0.4s ease, filter 0.4s ease;
    
      object-fit: cover;
      display: block;
      width: 100%;
    }

    .carousel-image:not(.center-image) {
      filter: grayscale(100%) brightness(40%);
    }

    .center-image {
      filter: none;
    }

    .carousel-card {
      position: relative;
    }

   .carousel-card:hover {
  transform: scale(1.05);
  z-index: 3;
}


    .topRightControls {
      display: flex;
      align-items: center;
      justify-content: right;
      gap: 20px;
      font-family: monospace;
      letter-spacing: 4px;
      margin: 40px 40px 40px 0;
    }

    .topBtn {
      display: flex;
      align-items: center;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 16px;
      color: #222222;
      gap: 10px;
      transition: all 0.3s ease;
      font-family: unset;
      font-weight: 50;
    }

    .arrow {
      
      display: inline-block;
      transition: transform 0.3s ease;
      
    }
     .arrow img {
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease, opacity 0.3s ease; /* smooth transition */
  opacity: .7; /* fully visible by default */
}

.leftArrow:hover img {
  transform: translateX(-5px);
  opacity: .3; 
  filter: none; /* remove any inherited filters */
}

.rightArrow:hover img {
  transform: translateX(5px);
  opacity: .3;
  filter: none;
  
}


    .label {
      text-transform: uppercase;
    }

    .separator {
      height: 30px;
      width: 1px;
      background-color: #222222;
    }

    .overlay-content {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: white;
      z-index: 4;
      pointer-events: none;
    }

    .play-button {
  background-color: rgba(255, 255, 255, 0.2);
  padding: 15px;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid grey;
  transition: background-color 0.3s ease;
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  box-sizing: border-box;
}

.play-button:hover {
  background-color: #ACD0D1;
}

.play-button svg {
  width: 24px;
  height: 24px;
  display: block;
}


    .image-title {
      margin-top: 12px;
      font-size: 20px;
      font-weight: bold;
      text-shadow: 1px 1px 2px #000;
    }

  `}
</style>

    </div>
  );
}

const styles = {
  carouselWrapper: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
    width: '100vw',
    maxWidth: '1200px',
    height: '450px',
    boxSizing: 'border-box',
    margin: '0 auto',
    
  },
  viewport: {
    overflow: 'hidden',
    width: '100%',
    height: '100%',
  },
  track: {
    display: 'flex',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: '0 0 33.3333%',
    padding: '0 10px',
    boxSizing: 'border-box',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.4s ease, z-index 0.4s ease',
    
  },
  image: {
    objectFit: 'cover',
  },
};
