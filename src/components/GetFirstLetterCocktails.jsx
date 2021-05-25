import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import API_COCKTAIL_FIRST_LETTER from '../constants/API_FIRST_LETTER';
// import fetchFilteredCocktails from '../utils/fetchFilteredCocktails';
import './GetFilteredCocktails.css';

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
  //  const [cocktails, setCocktails] = useState(API_COCKTAIL_FIRST_LETTER + filters);

  useEffect(() => {
    axios
      .get(API_COCKTAIL_FIRST_LETTER + filters)
      .then((r) => r.data.drinks)
      .then(setFiltered);
    console.log(filtered);
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
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetFirstLetterCocktails;
