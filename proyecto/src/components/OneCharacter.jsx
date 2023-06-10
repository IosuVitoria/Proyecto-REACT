import imageS from "../assets/slytherin.jpeg";
import imageG from "../assets/Gryffindor.jpeg";
import imageH from "../assets/Hufflepuff.png";
import imageR from "../assets/Ravenclaw.jpeg";
import imageC from "../assets/fondocarta.jpg";

const imgCharacter = (item) => {
  if (item.image !== "") {
    return (
      <div className="character-card" style={{ backgroundImage: `url(${imageC})` }}>
        <img src={item.image} alt="Imagen" className="character-image" />
        <p className="character-name">{item.name}</p>
      </div>
    );
  } else {
    let houseImage;
    if (item.house === "Gryffindor") {
      houseImage = imageG;
    } else if (item.house === "Hufflepuff") {
      houseImage = imageH;
    } else if (item.house === "Ravenclaw") {
      houseImage = imageR;
    } else if (item.house === "Slytherin") {
      houseImage = imageS;
    }

    return (
      <div className="character-card" style={{ backgroundImage: `url(${imageC})` }}>
        <img src={houseImage} alt={`Imagen ${item.house}`} className="character-image" />
        <p className="character-name">{item.name}</p>
      </div>
    );
  }
};

const OneCharacter = ({ item }) => {
  return <li>{imgCharacter(item)}</li>;
};

export default OneCharacter;
