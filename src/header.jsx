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
    'public/dulce1.jpg', // Imagen anterior agregada
    'src/imagenes/positiva.jpg', // Nueva imagen
    'src/imagenes/leon.jpg', // Nueva imagen
    'src/imagenes/dulce.jpg', // Nueva imagen
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
      <div style={{ width: '100%', maxWidth: '400px' }}>
        <Carousel showArrows={true} showStatus={false} showThumbs={false} className="carousel-responsivo">
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
