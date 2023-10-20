import { useState } from 'react';
import './App.css';
import Footer from './footer'; // Asegúrate de que la ruta sea correcta
import Header from './header'; // Importa el componente Header

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header /> {/* Agrega el componente Header aquí */}
      
      
      <Footer /> {/* Aquí se invoca el componente Footer */}
    </>
  );
}

export default App;
