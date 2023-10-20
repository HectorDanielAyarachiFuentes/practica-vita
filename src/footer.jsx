import React from 'react';

const SideBar = () => {
  const sidebarStyles = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    width: '250px', // Ancho fijo
  };

  const menuStyles = {
    listStyle: 'none',
    padding: '0',
  };

  const menuItemStyles = {
    margin: '10px 0',
  };

  const footerStyles = {
    marginTop: 'auto', // Para que el footer se expanda y ocupe el espacio restante
    padding: '20px',
    backgroundColor: '#222',
  };

  return (
    <aside style={sidebarStyles}>
      <h2>Menú</h2>
      <ul style={menuStyles}>
        <li style={menuItemStyles}><a href="/">Inicio</a></li>
        <li style={menuItemStyles}><a href="/acerca">Acerca de Nosotros</a></li>
        <li style={menuItemStyles}><a href="/contacto">Contáctanos</a></li>
        {/* Agrega más elementos de menú según tus necesidades */}
      </ul>

      <div style={footerStyles}>
        <p style={{ fontSize: '16px', textAlign: 'center' }}>
          &copy; {new Date().getFullYear()} Tu Sitio Web
        </p>
      </div>
    </aside>
  );
};

export default SideBar;
