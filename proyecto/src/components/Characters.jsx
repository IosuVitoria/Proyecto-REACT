// Characters.js
import OneCharacter from "./OneCharacter";

function Characters({ list, addNewFavorite }) {
  const handleClick = (event) => {
    const id = event.currentTarget.id;
    const findCharacter = list.find((item) => item.id === id);
    const { name, image } = findCharacter;
    addNewFavorite({ name, image });
    console.log(findCharacter);
  };

  const listCharacters = list.map((item) => (
    <li key={item.id} id={item.id} onClick={handleClick}>
      <OneCharacter item={item} />
    </li>
  ));

  return <ul>{listCharacters}</ul>;
}

export default Characters;
