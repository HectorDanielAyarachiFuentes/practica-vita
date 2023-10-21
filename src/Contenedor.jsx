import React from 'react';

const Contenedor = () => {
  return (
    <div className="contenedor">
      <div className="fila">
        <div className="columna">
          <img src="imagen1.jpg" alt="Imagen 1" />
          <div className="descripcion">Descripción de la imagen 1</div>
        </div>
        <div className="columna">
          <img src="imagen2.jpg" alt="Imagen 2" />
          <div className="descripcion">Descripción de la imagen 2</div>
        </div>
        <div className="columna">
          <img src="imagen3.jpg" alt="Imagen 3" />
          <div className="descripcion">Descripción de la imagen 3</div>
        </div>
      </div>
      <div className="fila">
        <div className="columna">
          <img src="imagen4.jpg" alt="Imagen 4" />
          <div className="descripcion">Descripción de la imagen 4</div>
        </div>
        <div className="columna">
          <img src="imagen5.jpg" alt="Imagen 5" />
          <div className="descripcion">Descripción de la imagen 5</div>
        </div>
        <div className="columna">
          <img src="imagen6.jpg" alt="Imagen 6" />
          <div className="descripcion">Descripción de la imagen 6</div>
        </div>
      </div>
    </div>
  );
};

export default Contenedor;
