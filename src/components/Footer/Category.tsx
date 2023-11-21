import React from 'react';
import './../../index.css';
import { Container, Box } from '@mui/material';

function Category() {
  const columnStyle: React.CSSProperties = {
    flex: 1,
    padding: '50px 0',
    color: '#2581c2',
  };

  const listItemStyle: React.CSSProperties = {
    listStyle: 'none',
  };

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: '#2581c2',
    fontSize: '20px',
    transition: 'color 0.3s',
  };

  return (
    <Container>
      <Box sx={{ display: 'flex' }}>
        <div style={columnStyle}>
          <h2>Kurumsal</h2>
          <ul style={listItemStyle}>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                Hakkımızda
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                Gizlilik
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                Kullanıcı Sözleşmesi
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                Kullanım Koşulları
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                İletişim
              </a>
            </li>
            <li>
              <a href="#" style={linkStyle} className="hover-link linkStyle">
                Çerez Politikası
              </a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <h2>Kategoriler</h2>
          <ul style={listItemStyle}>
            <li>
              <a href="/previous-events" style={linkStyle} className="hover-link linkStyle">
                Previous Events
              </a>
            </li>
            <li>
              <a href="/category/concert" style={linkStyle} className="hover-link linkStyle">
                Concert
              </a>
            </li>
            <li>
              <a href="/category/theater" style={linkStyle} className="hover-link linkStyle">
                Theater
              </a>
            </li>
            <li>
              <a href="/category/festival" style={linkStyle} className="hover-link linkStyle">
                Festival
              </a>
            </li>
            <li>
              <a href="/category/standup" style={linkStyle} className="hover-link linkStyle">
                Stand Up
              </a>
            </li>
            <li>
              <a href="/category/sport" style={linkStyle} className="hover-link linkStyle">
                Sport
              </a>
            </li>
          </ul>
        </div>
        <div style={columnStyle}>
          <p className="hide-paragraph">Web sitemizde en yeni etkinlikleri bulabilir ve bilet satın alabilirsiniz. Her türlü etkinliği kaçırmayın!</p>
        </div>
      </Box>
    </Container>
  );
}

export default Category;
