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
          <li>
            <Link to="/RandomCocktail">Random Cocktail</Link>
          </li>
          <li>
            <Link to="/Filter">Cocktail Categories</Link>
          </li>
          <li>
            <Link to="/SearchCocktail">Search a Cocktail</Link>
          </li>
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
