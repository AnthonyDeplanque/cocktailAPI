import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './GetFilteredCocktails.css';
import fetchFirstLetter from '../utils/fetchFirstLetter';

const firstLetter = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '0'];

const GetFirstLetterCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState('');

  useEffect(() => {
    fetchFirstLetter(filters, setFiltered);
  }, [filters]);

  return (
    <div>
      <div className="filtering-block">
        <p>Select a first letter :</p>
        <select
          className="filtered-items element-color"
          onChange={(e) => {
            setFilters(e.target.value);
          }}
        >
          <option value="">none</option>
          {firstLetter.map((letter) => (
            <option value={letter}>{letter}</option>
          ))}
        </select>
      </div>
      {filtered && (
        <h1>Found {filtered.length} cocktail
          {filtered.length > 1 ? 's ' : ' ' }
          for {filters.toUpperCase()}
        </h1>
      )}
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

export default GetFirstLetterCocktails;
