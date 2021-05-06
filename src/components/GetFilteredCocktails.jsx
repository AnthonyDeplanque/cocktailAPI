import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import fetchFilteredCocktails from '../utils/fetchFilteredCocktails';
import "./GetFilteredCocktails.css";
import {API_CATEGORIES, API_FILTER } from "../constants/API";


const GetFilteredCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState("");
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER + filters);
  const [viewCocktail, setViewCocktail] = useState();


  const fetchCategories = () => {
    axios
      .get(API_CATEGORIES)
      .then((r) => r.data)
      .then((r) => r.drinks)
      .then(setCategories);
  };
  useEffect(() => {
    fetchCategories();
    fetchFilteredCocktails(cocktails, setCocktails, filters, setFiltered);
  }, [filters, categories]);

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

      {filtered && (
        <div className="flex">
          {filtered.map((cocktail) => (
              <div className="box">
                <img className="DrinkThumb" src={cocktail.strDrinkThumb} />
                <p>{cocktail.strDrink}</p>
              </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default GetFilteredCocktails;
