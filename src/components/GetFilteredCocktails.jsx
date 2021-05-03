import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GetFilteredCocktails.css";

const API_FILTER = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=";
const API_CATEGORIES = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

const GetFilteredCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState("Shot");
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER + filters);
const fetchCocktails = () =>{
    axios
    .get(cocktails)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then(setFiltered);
    setCocktails(API_FILTER + filters)
}
const fetchCategories = () =>{
    axios
    .get(API_CATEGORIES)
    .then(r=>r.data).then(r=>r.drinks)
    .then(setCategories);
}
  useEffect(() => {
    fetchCategories();
    fetchCocktails();
  }, [filters, categories]);

  return (
    <div>
      <select onChange={(e) => {setFilters(e.target.value)}}>
        {categories.map(cat=> <option value={cat.strCategory }>{cat.strCategory }</option>) }

      </select>
      
     {filtered && <div className= "flex">
          {filtered.map((cocktail) => (
              <div className = 'box'>
                <img className="DrinkThumb" src={cocktail.strDrinkThumb} />
                <p>{cocktail.strDrink}</p>
              </div>
          ))}
      </div> }
    </div>
  );
};

export default GetFilteredCocktails;
