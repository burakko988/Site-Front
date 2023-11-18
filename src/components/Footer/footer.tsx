import React from 'react';
import SocialMediaIcon from './SocialMediaIcon';
import Category from './Category';
import { Container } from '@mui/material';

const Footer = () => {
  const footerStyle: React.CSSProperties = {
    backgroundColor: '#205072',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div style={footerStyle}>
      <Container>
        <SocialMediaIcon />
        <Category />
      </Container>
    </div>
  );
};

export default Footer;
