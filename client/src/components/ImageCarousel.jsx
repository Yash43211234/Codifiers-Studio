import React, { useRef, useEffect, useState } from 'react';
import './ImageCarousel.css';

const ImageCarousel = () => {
  const images = [
    { src: '/crowserImages/122.jpg', alt: 'Battle of Rappers' },
    { src: '/crowserImages/30.jpg', alt: 'Battle of Singers' },
    { src: '/crowserImages/4.jpg', alt: 'Another Battle' },
    { src: '/crowserImages/18.jpg', alt: 'New Show 1' },
    { src: '/crowserImages/26.jpg', alt: 'New Show 2' },
  ];

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 480) {
      return { imageWidth: 300, visibleCount: 1 };
    } else if (width < 768) {
      return { imageWidth: 200, visibleCount: 2 };
    } else {
      return { imageWidth: 300, visibleCount: 4 };
    }
  };

  const [{ imageWidth, visibleCount }, setResponsive] = useState(getResponsiveValues());
  const imageMargin = 40;
  const extendedImages = [...images, ...images];
  const totalImages = extendedImages.length;
  const containerRef = useRef(null);
  const scrollPosition = useRef(0);
  const speed = 0.5;
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const handleResize = () => setResponsive(getResponsiveValues());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const scroll = () => {
      if (hoveredIndex === null) {
        scrollPosition.current += speed;
        const resetPosition = (imageWidth + imageMargin) * images.length;
        if (scrollPosition.current >= resetPosition) {
          scrollPosition.current = 0;
        }
        if (containerRef.current) {
          containerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };
    animationRef.current = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationRef.current);
  }, [imageWidth, hoveredIndex]);

  const scrollManual = (direction) => {
    const scrollAmount = (imageWidth + imageMargin) * visibleCount;
    scrollPosition.current += direction === 'left' ? -scrollAmount : scrollAmount;

    const resetPosition = (imageWidth + imageMargin) * images.length;
    if (scrollPosition.current < 0) {
      scrollPosition.current = resetPosition - scrollAmount;
    } else if (scrollPosition.current >= resetPosition) {
      scrollPosition.current = 0;
    }

    if (containerRef.current) {
      containerRef.current.style.transform = `translateX(-${scrollPosition.current}px)`;
    }
  };

  const arrowSize = imageWidth <= 160 ? 30 : imageWidth <= 200 ? 35 : 40;

 const wrapperStyle = {
  width: `${visibleCount * (imageWidth + imageMargin) - imageMargin}px`,
  height: imageWidth <= 160 ? '300px' : imageWidth <= 200 ? '250px' : '320px',
  padding: imageWidth <= 160 ? '0' : '30px 0',
  borderRadius: '8px',
  backdropFilter: 'blur(4px)',
  background: 'linear-gradient(145deg, #111, #1a1a1a)',
};


  const arrowStyle = {
    width: `${arrowSize}px`,
    height: `${arrowSize}px`,
    fontSize: `${arrowSize * 0.5}px`,
  };

  return (
    <div className="carousel-wrapper" style={wrapperStyle}>
      <button
        className="carousel-arrow"
        style={{ ...arrowStyle, left: '10px' }}
        onClick={() => scrollManual('left')}
      >
        &#8249;
      </button>
      <button
        className="carousel-arrow"
        style={{ ...arrowStyle, right: '10px' }}
        onClick={() => scrollManual('right')}
      >
        &#8250;
      </button>

      <div ref={containerRef} className="carousel-container" style={{ width: `${(imageWidth + imageMargin) * totalImages}px` }}>
        {extendedImages.map((img, index) => (
          <div
            key={index}
            className="carousel-image-wrapper"
            style={{
              marginRight: index !== totalImages - 1 ? `${imageMargin}px` : 0,
              width: `${imageWidth}px`,
              height: imageWidth <= 160 ? '200px' : imageWidth <= 200 ? '250px' : '300px',
            }}
          >
            <a
              href="https://theone11.show"
              target="_blank"
              rel="noopener noreferrer"
              className="carousel-link"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`carousel-img ${hoveredIndex === index ? 'hovered' : ''}`}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
