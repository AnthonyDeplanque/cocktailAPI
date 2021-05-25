import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchSearchedCocktails from '../utils/fetchSearchedCocktails';
import './SearchCocktail.css';
import './GetFilteredCocktails.css';

export default function SearchCocktail() {
  const [searchCocktail, setSearchCocktail] = useState('');
  const [cocktailsToSearch, setCocktailsToSearch] = useState('');
  const [fetchedCocktail, setFetchedCocktail] = useState(['']);
  useEffect(() => {
    fetchSearchedCocktails(cocktailsToSearch, setFetchedCocktail);
  }, [cocktailsToSearch]);

  return (
    <div className="search-cocktail-block">
      <div className="filtering-block">
        <input
          className="filtered-items element-color"
          placeholder="search a cocktail"
          onChange={(e) => setSearchCocktail(e.target.value)}
        />
        <button
          className="cocktail-button"
          type="submit"
          onClick={() => setCocktailsToSearch(searchCocktail)}
        >
          Search Cocktail !
        </button>
      </div>
      {fetchedCocktail ? (
        <>
          {fetchedCocktail.length
            ? <h1>Found {fetchedCocktail.length} cocktail{(fetchedCocktail.length > 1) ? 's' : null }</h1>
            : <h1>Fetching cocktails</h1>}
          <div className="flex-cocktail-list">
            {fetchedCocktail.map((e) => (
              <div className="cocktail-littlebox">
                <Link to={`/cocktail/${e.idDrink}`}>
                  <img
                    className="searched-drinkthumb"
                    src={e.strDrinkThumb}
                    alt={e.idDrink}
                  />
                  <div className="drinkthumb-name">{e.strDrink}</div>
                </Link>
              </div>
            ))}
          </div>
        </>
      )
        : <h1>No cocktails found</h1>}
    </div>
  );
}
