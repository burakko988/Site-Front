import React from 'react';
import './../../index.css';

function Category() {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'flex-end', // Sağ tarafa hizalama
    alignItems: 'flex-start', // Üst tarafa hizalama
    height: '40%',
    padding: '0 50px',
  };

  const columnStyle: React.CSSProperties = {
    flex: 1,
    padding: '50px',
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
    <div style={containerStyle} className="containerStyle">
      <div style={columnStyle}>
        <h2>Kurumsal Bilgiler</h2>
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
            <a href="/category/previous-events" style={linkStyle} className="hover-link linkStyle">
              Previous Events
            </a>
          </li>
          <li>
            <a href="/category/concert" style={linkStyle} className="hover-link linkStyle">
              Concert
            </a>
          </li>
          <li>
            <a href="/category/theatre" style={linkStyle} className="hover-link linkStyle">
              Theatre
            </a>
          </li>
          <li>
            <a href="/category/festival" style={linkStyle} className="hover-link linkStyle">
              Festival
            </a>
          </li>
          <li>
            <a href="/category/stand-up" style={linkStyle} className="hover-link linkStyle">
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
    </div>
  );
}

export default Category;
