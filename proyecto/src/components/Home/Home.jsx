import { useEffect, useState } from 'react';
import axios from "axios";
import Characters from '../Characters';
import CharacterFilter from '../CharacterFilter';

const Home = () => {
  const [listCharacters, setListCharacters] = useState([]);
  const [house, setHouse] = useState('gryffindor');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const url = `https://hp-api.onrender.com/api/characters/house/${house}`;
    axios.get(url)
      .then((resp) => {
        setListCharacters(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [house]);

  const handleSelect = (event) => {
    setHouse(event.target.value);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCharacters = listCharacters.filter(character =>
    character.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div id="Filters">
        <select name="" id="Housefilter" onChange={handleSelect}>
          <option value="gryffindor">Gryffindor</option>
          <option value="Ravenclaw">Ravenclaw</option>
          <option value="Hufflepuff">Hufflepuff</option>
          <option value="Slytherin">Slytherin</option>
        </select>
        <CharacterFilter id="Namefilter" searchTerm={searchTerm} handleSearch={handleSearch} />
      </div>
      <Characters list={filteredCharacters} />
    </div>
  );
};

export default Home;
