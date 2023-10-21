import React from 'react';

const SideBar = ({ menuItems }) => (
  <aside className="sidebar">
    <h2>Menú</h2>
    <ul>
      {menuItems.map((item, index) => (
        <li key={index}>
          <a href={item.link}>{item.label}</a>
        </li>
      ))}
    </ul>
  </aside>
);

export default SideBar;
