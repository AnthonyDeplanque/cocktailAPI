import { useState, useEffect } from 'react';
import fecthSearchedCocktails from '../utils/fetchSelectedCocktail';

export default function SearchCocktail() {
  const [searchCocktail, setSearchCocktail] = useState('');
  const [cocktailsToSearch, setCocktailsToSearch] = useState('');
  const [fetchedCocktail, setFetchedCocktail] = useState([]);
  useEffect(() => {
      fecthSearchedCocktails(cocktailsToSearch, setFetchedCocktail);
}, [cocktailsToSearch, fetchedCocktail]);

  return (
    <div className="search-cocktail-block">
      <input
        placeholder="search a cocktail"
        onChange={(e) => setSearchCocktail(e.target.value)}
      ></input>
      <button onClick={() => setCocktailsToSearch(searchCocktail)}>
        Search Cocktail !
      </button>
      {fetchedCocktail && (
        <div className="searched-cocktailList">
            <p>found {fetchedCocktail.length} cocktails !</p>
          <ul>
            {fetchedCocktail.map((e, i) => (
              <li>{e.strDrink}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
