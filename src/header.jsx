import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#f44259', // Rojo similar al de Pokémon
    color: '#fff',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'sans-serif', // Cambiar la fuente
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
    fontFamily: 'sans-serif', // Cambiar la fuente
  };

  const carouselImages = [
    'imagen1.jpg',
    'imagen2.jpg',
    'imagen3.jpg',
  ];

  return (
    <header style={headerStyle}>
      <div style={logoStyle}>Nueva Web Genial</div>
      <nav>
        <ul style={navStyle}>
          <li><a href="/" style={linkStyle}>Nosotros</a></li>
          <li><a href="/acerca" style={linkStyle}>Aca estamos</a></li>
          <li><a href="/contacto" style={linkStyle}>A donde vamos</a></li>
        </ul>
      </nav>
      <div style={{ width: '50%', maxHeight: '200px' }}>
        <Carousel showArrows={true} showStatus={false} showThumbs={false}>
          {carouselImages.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Carousel ${index}`} />
            </div>
          ))}
        </Carousel>
      </div>
    </header>
  );
};

export default Header;
