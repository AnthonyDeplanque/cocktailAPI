import { React, useEffect, useState } from 'react';
import fetchCocktail from '../utils/fetchCocktails';
import API_RANDOM from '../constants/API_RANDOM';
import Cocktail from './Cocktail';

const GetCocktailsList = () => {
  const [cocktail, setCocktail] = useState([{}]);
  const cocktailRandom = API_RANDOM;

  useEffect(() => {
    fetchCocktail(cocktailRandom, setCocktail);
  }, [cocktailRandom]);

  return (
    <div>
      <div className="filtering-block">
        <button
          className="cocktail-button thick"
          type="submit"
          onClick={() => fetchCocktail(cocktailRandom, setCocktail)}
        >
          Another ?
        </button>
      </div>
      {cocktail ? (<Cocktail {...cocktail[0]} />) : (
        <p>fetching cocktail</p>
      )}
    </div>
  );
};

export default GetCocktailsList;
