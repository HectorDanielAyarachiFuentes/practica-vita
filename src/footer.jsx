import React from 'react';

const Footer = () => {
  const footerStyles = {
    backgroundColor: '#f2c335', // Amarillo para la temática de Pokémon
    borderTop: '1px solid #ddd',
    padding: '20px',
    textAlign: 'center',
  };

  const footerTextStyles = {
    color: '#333',
    fontSize: '16px',
  };

  return (
    <footer style={footerStyles}>
      <p style={footerTextStyles}>
        &copy; {new Date().getFullYear()} Pokémon Fan Site
      </p>
    </footer>
  );
};

export default Footer;
