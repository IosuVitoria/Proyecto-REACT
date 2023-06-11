const Favorito = ({ personaje }) => {
  return (
    <div>
      <h3>PERSONAJES FAVORITOS DEL USUARIO</h3>
      {personaje && (
        <div>
          <img src={personaje.image} alt={`Imagen de ${personaje.name}`} />
          <p>Nombre: {personaje.name}</p>
          <p>Casa: {personaje.house}</p>
          
        </div>
      )}
    </div>
  );
};

export default Favorito;