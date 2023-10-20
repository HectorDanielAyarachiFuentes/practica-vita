// Header.jsx

import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Mi Sitio Genial</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de Nosotros</a></li>
          <li><a href="/contacto">Contáctanos</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
