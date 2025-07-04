import React, { useState } from 'react';

const carouselItems = [
  
  { image: '37.jpg', video: true, title: 'Yorushika - Snake' },
  { image: '26_10.jpg', video: false, title: 'Art Collage' },
  { image: 'cr1.jpg', video: false, title: 'Art Collage' },
  { image: 'cr2.jpg', video: false, title: 'Art Collage' },
  { image: 'cr4.jpg', video: false, title: 'Art Collage' },
  { image: 'cr5.jpeg', video: false, title: 'Art Collage' },
  { image: 'cr6.jpg', video: false, title: 'Art Collage' },
  { image: 'cr7.jpg', video: false, title: 'Art Collage' },
  { image: 'cr8.jpg', video: false, title: 'Art Collage' },
  { image: 'cr9.jpeg', video: false, title: 'Art Collage' },
  { image: 'cr10.jpg', video: false, title: 'Art Collage' },
  { image: 'cr11.jpg', video: false, title: 'Art Collage' },
  { image: 'cr12.jpg', video: false, title: 'Art Collage' },
  
];

export default function CustomCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const visibleCount = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + carouselItems.length) % carouselItems.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
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
          <span className="arrow leftArrow" style={{ marginRight: '10px' }}><img src='Like_the_arrow1.png' /></span>
          <span className="label">PREV</span>
        </button>
        <div className="separator"></div>
        <button onClick={prevSlide} className="topBtn">
          <span className="label">NEXT</span>
          <span className="arrow rightArrow"><img src='Like_the_arrow.png' /></span>
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
                    {/* Optional: Overlay content here */}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Responsive Styling */}
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

          .arrow img {
            width: 50px;
            height: 50px;
            transition: transform 0.3s ease, opacity 0.3s ease;
            opacity: 0.7;
          }

          .leftArrow:hover img {
            transform: translateX(-5px);
            opacity: 0.3;
          }

          .rightArrow:hover img {
            transform: translateX(5px);
            opacity: 0.3;
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

          @media screen and (max-width: 768px) {
                   
  .carousel-card {
    flex: 0 0 100% !important;
    padding: 0;
    height: auto;
    margin-top:-50px;
  }

  .carousel-image {
    width: 100% !important;
    height: auto;
  }

  .center-image {
    width: 94% !important;
    margin-right: 17px;
  }

  .overlay-content {
    top: auto;
    bottom: 20px;
  }

  .topRightControls {
  position: absolute;
  right: 0px;
  top:-40px;
  z-index: 10;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  padding: 6px 10px;
  border-radius: 10px;
  m
}


  .topBtn {
    font-size: 14px;
    gap: 6px;
  }

  .arrow img {
    width: 32px;
    height: 32px;
    opacity: 0.6;
  }

  .separator {
    display: none;
  }
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
    width: '96vw',
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
