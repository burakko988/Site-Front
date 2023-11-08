import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Category from './Category';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    height: '700px',
    backgroundColor: '#205072',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={footerStyle}>
      <SocialMediaIcon />
      <Category />
    </div>
  );
};

export default Footer;
