import React from 'react';

const Header = () => {
  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 0',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const logoStyle = {
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navStyle = {
    listStyle: 'none',
    display: 'flex',
    gap: '20px',
  };

  const linkStyle = {
    textDecoration: 'none',
    color: '#fff',
  };

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
    </header>
  );
};

export default Header;
