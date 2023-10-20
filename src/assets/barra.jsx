// SideBar.jsx

import React from 'react';

const SideBar = () => {
  return (
    <aside className="sidebar">
      <h2>Menú</h2>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de Nosotros</a></li>
        <li><a href="/contacto">Contáctanos</a></li>
        {/* Agrega más elementos de menú según tus necesidades */}
      </ul>
    </aside>
  );
};

export default SideBar;
