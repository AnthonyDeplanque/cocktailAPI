import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFilteredCocktails from '../utils/fetchFilteredCocktails';
import fetchCategories from '../utils/fetchCategories';
import API_FILTER from '../constants/API_FILTER';
import './GetFilteredCocktails.css';
import './GetSelectedCocktail.css';

const GetFilteredCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState('');
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER + filters);

  useEffect(() => {
    fetchCategories(setCategories);
    fetchFilteredCocktails(cocktails, filters, setFiltered);
    setCocktails(API_FILTER + filters);
  }, [cocktails, filters]);

  return (
    <div>
      <select
        onChange={(e) => {
          setFilters(e.target.value);
        }}
      >
        <option value="">none</option>
        {categories.map((cat) => (
          <option value={cat.strCategory}>{cat.strCategory}</option>
        ))}
      </select>
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
                {cocktail.strDrink}
              </Link>
              )
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetFilteredCocktails;
