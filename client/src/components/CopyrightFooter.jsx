import React from 'react';

const footerStyle = {
  width: '100%',
  textAlign: 'center',
  padding: '16px',
  backgroundColor: '#000',
  color: '#fff',
  fontSize: '14px',
  lineHeight: '1.5',
  boxSizing: 'border-box',
};

const responsiveStyle = {
  padding: '12px',
  fontSize: '13px',
};

const CopyrightFooter = () => {
  const currentYear = new Date().getFullYear();

  // Detects small screens using a media query
  const isMobile = window.innerWidth <= 480;
  const style = isMobile ? { ...footerStyle, ...responsiveStyle } : footerStyle;

  return (
    <footer style={style}>
      &copy; {currentYear} Creatous Collective Media. All rights reserved.
    </footer>
  );
};

export default CopyrightFooter;
