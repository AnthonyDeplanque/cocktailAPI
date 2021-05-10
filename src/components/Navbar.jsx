import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Filtered Cocktails</Link>
        </li>
        <li>
          <Link to="/RandomCocktail">Random Cocktail</Link>
        </li>
        <li>
          <Link to="/SearchCocktail">Search a Cocktail</Link>
        </li>
        <div className="navbar-logo">
          <img src="https://www.thecocktaildb.com/images/cocktail_right.png" alt="the cocktail dispenser" />
          <h1>The Cocktail Dispenser !</h1>
        </div>
      </ul>
    </nav>
  );
}
