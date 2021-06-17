import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import './BurgerMenu.css';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div
        aria-hidden="true"
        className={showMenu ? 'burger-menu burger-menu-open' : 'burger-menu'}
        onClick={() => setShowMenu(!showMenu)}
      >
        <div className={showMenu ? 'line line-1 line-1-open' : 'line line-1'} />
        <div className={showMenu ? 'line line-2 line-2-open' : 'line line-2'} />
        <div className={showMenu ? 'line line-3 line-3-open' : 'line line-3'} />
      </div>
      {!showMenu && <h1 className="flex-title">The Cocktail Dispenser !</h1> }
      {showMenu && (
        <ul className="navbar-list">
          <Link to="/RandomCocktail">
            <li className="cocktail-button">Random Cocktail
            </li>
          </Link>
          <Link to="/Filter/Category">
            <li className="cocktail-button">Cocktail Categories
            </li>
          </Link>
          <Link to="/Filter/Ingredient">
            <li className="cocktail-button">Cocktail Ingredients
            </li>
          </Link>
          <Link to="/SearchCocktail">
            <li className="cocktail-button">Search a Cocktail
            </li>
          </Link>
          <Link to="/FirstLetter">
            <li className="cocktail-button">Cocktail by first letter
            </li>
          </Link>
          <div className="navbar-logo">
            <img
              src="https://www.thecocktaildb.com/images/cocktail_right.png"
              alt="the cocktail dispenser"
            />
          </div>
        </ul>
      )}
    </nav>
  );
}
