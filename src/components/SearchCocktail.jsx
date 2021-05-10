import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchSearchedCocktails from '../utils/fetchSearchedCocktails';
import './SearchCocktail.css';

export default function SearchCocktail() {
  const [searchCocktail, setSearchCocktail] = useState('');
  const [cocktailsToSearch, setCocktailsToSearch] = useState('');
  const [fetchedCocktail, setFetchedCocktail] = useState(['']);
  useEffect(() => {
    fetchSearchedCocktails(cocktailsToSearch, setFetchedCocktail);
  }, [cocktailsToSearch, fetchedCocktail]);

  return (
    <div className="search-cocktail-block">
      <input
        placeholder="search a cocktail"
        onChange={(e) => setSearchCocktail(e.target.value)}
      />
      <button
        type="submit"
        onClick={() => setCocktailsToSearch(searchCocktail)}
      >
        Search Cocktail !
      </button>
      {fetchedCocktail && (
        <div className="searched-cocktailList">
          <p>found {fetchedCocktail.length} cocktails !</p>
          <ul>
            {fetchedCocktail.map((e) => (
              <li>
                <img
                  className="searched-drinkthumb"
                  src={e.strDrinkThumb}
                  alt={e.idDrink}
                />
                <Link to={`/cocktail/${e.idDrink}`}>{e.strDrink}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
