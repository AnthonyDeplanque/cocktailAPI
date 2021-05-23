import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchFilteredCocktails from '../utils/fetchFilteredCocktails';
import fetchCategories from '../utils/fetchCategories';
import API_FILTER_CATEGORIES from '../constants/API_FILTER_CATEGORIES';
import './GetFilteredCocktails.css';

const GetCategoriesCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState('');
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER_CATEGORIES + filters);

  useEffect(() => {
    fetchCategories(setCategories);
    fetchFilteredCocktails(cocktails, filters, setFiltered);
    setCocktails(API_FILTER_CATEGORIES + filters);
  }, [cocktails, filters]);

  return (
    <div>
      <p>Select a cocktail category :</p>
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

export default GetCategoriesCocktails;
