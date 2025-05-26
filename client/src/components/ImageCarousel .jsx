import React, { useRef, useEffect, useState } from 'react';

const ImageCarousel = () => {
  const images = [
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/122.jpg', alt: 'Battle of Rappers' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/30.jpg', alt: 'Battle of Singers' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/4.jpg', alt: 'Another Battle' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/18.jpg', alt: 'New Show 1' },
    { src: 'https://the-codifiers-studio.s3.ap-south-1.amazonaws.com/26.jpg', alt: 'New Show 2' },
  ];

  const getResponsiveValues = () => {
    const width = window.innerWidth;
    if (width < 480) {
      return { imageWidth: 160, visibleCount: 1 };
    } else if (width < 768) {
      return { imageWidth: 200, visibleCount: 2 };
    } else {
      return { imageWidth: 300, visibleCount: 4 };
    }
  };

  const [{ imageWidth, visibleCount }, setResponsive] = useState(getResponsiveValues());

  const imageMargin = 10;
  const extendedImages = [...images, ...images];
  const totalImages = extendedImages.length;
  const containerRef = useRef(null);
  const scrollPosition = useRef(0);
  const speed = 0.5;
  const animationRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // ✅ Track which image is hovered

  useEffect(() => {
    const handleResize = () => {
      setResponsive(getResponsiveValues());
    };
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

  const wrapperStyle = {
    overflow: 'hidden',
    width: `${visibleCount * (imageWidth + imageMargin) - imageMargin}px`,
    height: '300px',
    margin: '0 auto',
    position: 'relative',
  };

  const containerStyle = {
    width: `${(imageWidth + imageMargin) * totalImages}px`,
    display: 'flex',
    transition: 'none',
  };

  const arrowStyle = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    cursor: 'pointer',
    zIndex: 2,
    fontSize: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <div style={wrapperStyle}>
      <button
        style={{ ...arrowStyle, left: '10px' }}
        onClick={() => scrollManual('left')}
      >
        &#8249;
      </button>
      <button
        style={{ ...arrowStyle, right: '10px' }}
        onClick={() => scrollManual('right')}
      >
        &#8250;
      </button>

      <div ref={containerRef} style={containerStyle}>
        {extendedImages.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            width={imageWidth}
            height={300}
            onMouseEnter={() => setHoveredIndex(index)} // ✅ Start hover
            onMouseLeave={() => setHoveredIndex(null)} // ✅ End hover
            style={{
              marginRight: index !== totalImages - 1 ? `${imageMargin}px` : 0,
              objectFit: 'cover', // or 'cover', 'fill', etc.
              flexShrink: 0,
              borderRadius: '2px',
              transition: 'transform 0.3s ease, z-index 0.3s ease',
              transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)', // scales width & height
              transformOrigin: 'center center', // ensures scaling from center
              cursor: 'pointer',
              zIndex: hoveredIndex === index ? 10 : 1,
              
              
              
              
            }}

          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
