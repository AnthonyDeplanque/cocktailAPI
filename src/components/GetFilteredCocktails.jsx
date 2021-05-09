import React from "react";
import { useState, useEffect } from "react";
import fetchFilteredCocktails from "../utils/fetchFilteredCocktails";
import fetchCategories from "../utils/fetchCategories";
import API_FILTER from "../constants/API_FILTER";
import GetSelectedCocktail from "./GetSelectedCocktail";
import "./GetFilteredCocktails.css";

const GetFilteredCocktails = () => {
  const [filtered, setFiltered] = useState([]);
  const [filters, setFilters] = useState("");
  const [categories, setCategories] = useState([]);
  const [cocktails, setCocktails] = useState(API_FILTER + filters);
  const [viewCocktail, setViewCocktail] = useState("");
  const [handlerDisplay, setHandlerDisplay] = useState(false);

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
              <img className="cocktail-list-drinkThumb" src={cocktail.strDrinkThumb} alt={cocktail.idDrink}/>
              <p>{cocktail.strDrink}</p>
              {!handlerDisplay && <button
                onClick={() => {
                  setViewCocktail(cocktail.idDrink);
                  setHandlerDisplay(true);
                }}
                >
                Show me !
              </button>
              }
            </div>
          ))}
          {handlerDisplay && (
            <div className="sticky-cocktail">
           <button className="quit-button" onClick={()=>setHandlerDisplay(false)}>X</button>
           <GetSelectedCocktail cocktailId={viewCocktail} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default GetFilteredCocktails;

