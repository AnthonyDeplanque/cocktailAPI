import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFilteredCocktails from '../utils/fetchFilteredCocktails';
import fetchIngredients from '../utils/fetchIngredients';
import API_FILTER_INGREDIENTS from '../constants/API_FILTER_INGREDIENTS';
import './GetFilteredCocktails.css';

const GetIngredientsCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState('');
  const [ingredients, setIngredients] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER_INGREDIENTS + filters);

  useEffect(() => {
    fetchIngredients(setIngredients);
    fetchFilteredCocktails(cocktails, filters, setFiltered);
    setCocktails(API_FILTER_INGREDIENTS + filters);
  }, [cocktails, filters]);

  return (
    <div>
      <div className="filtering-block">
        <p>Select a cocktail ingredient :</p>
        <select
          className="filtered-items element-color"
          onChange={(e) => {
            setFilters(e.target.value);
          }}
        >
          <option value="">none</option>
          {ingredients.map((cat) => (
            <option value={cat.strIngredient1}>{cat.strIngredient1}</option>
          ))}
        </select>
      </div>
      <h1>{filters}</h1>
      {filtered && (
        <div className="flex-cocktail-list">
          {filtered.map((cocktail) => (
            <div className="cocktail-littlebox">
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <img
                  className="searched-drinkthumb"
                  src={cocktail.strDrinkThumb}
                  alt={cocktail.idDrink}
                />
                <div className="drinkthumb-name">{cocktail.strDrink}</div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetIngredientsCocktails;
