import React, { useState } from 'react';
import './App.css';
import Footer from './footer';
import Header from './header';
import SideBar from './Sidebar'; // Asegúrate de que el import del componente Sidebar sea correcto
import Contenedor from './Contenedor'; // Agrega el import del componente Contenedor

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Contenedor /> {/* Agrega el componente Contenedor aquí */}
      <Footer />
    </>
  );
}

export default App;
