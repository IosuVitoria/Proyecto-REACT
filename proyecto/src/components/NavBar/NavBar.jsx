import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/favorites">Favoritos</Link>
        </li>
        <li>
          <Link to="/detail/prisioner-of-azkaban">Prisioner of Azkaban</Link>
        </li>
        <li>
          <Link to="/trivial">Trivial</Link>
        </li>
        <li>
          <Link to="/historias">Historias</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
