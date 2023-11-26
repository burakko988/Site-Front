import React from 'react';
import FooterLogo from '../../assets/images/eventoria-footer-logo.png';

function SocialMediaIcon() {
  const gridContainerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: '',
  };

  const gridItemStyle: React.CSSProperties = {
    padding: '30px',
    textAlign: 'center',
  };

  const lineStyle: React.CSSProperties = {
    height: '30%',
  };

  return (
    <div style={gridContainerStyle} className="grid-container">
      <div style={{ flex: 1, ...gridItemStyle, flexBasis: '20%', fontSize: '25px', color: '#fff' }} className="grid-item">
        <img src={FooterLogo} style={{ height: '35px' }} alt="" />
      </div>
      <div style={lineStyle} className="line"></div>
      <div style={{ flex: 1, ...gridItemStyle, textAlign: 'justify', flexBasis: '50%', fontSize: '18px', color: '#2e86de', whiteSpace: 'normal', wordWrap: 'break-word' }} className="grid-item">
        <p>Eventoria, organizatörler tarafından düzenlenen farklı kategorilerdeki etkinlikleri, milyonlara ulaştıran yeni nesil bir sitesidir.</p>
      </div>

      <div style={{ flex: 1, ...gridItemStyle, flexBasis: '30%' }} className="grid-item">
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-youtube"></i>
          </a>
          <a href="#">
            {' '}
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SocialMediaIcon;
