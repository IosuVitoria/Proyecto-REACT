import { useEffect, useState } from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import imageC from './assets/fondocarta.jpg';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Characters from './components/Characters';
import CharacterFilter from './components/CharacterFilter';
import Trivial from './components/Trivial/Trivial';

function App() {
  const [listCharacters, setListCharacters] = useState([]);
  const [house, setHouse] = useState('gryffindor');
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const url = `https://hp-api.onrender.com/api/characters/house/${house}`;

  const handleSelect = (event) => {
    setHouse(event.target.value);
  };

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setListCharacters(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  const addNewFavorite = (newFav) => {
    setFavorites([...favorites, newFav]);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = listCharacters.filter((character) =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trivial" element={<Trivial />} />
      </Routes>
      <main>
        <Characters list={filteredCharacters} addNewFavorite={addNewFavorite} />

        <h2>PERSONAJES FAVORITOS DEL USUARIO</h2>
        <ul>
          {favorites.map((favorite) => (
            <li key={favorite.id} style={{ backgroundImage: `url(${imageC})` }}>
              <img src={favorite.image} alt="character image" className="character-image" />
              <p>Name: {favorite.name}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
