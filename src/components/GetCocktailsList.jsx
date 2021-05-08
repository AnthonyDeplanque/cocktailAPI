import React, { useEffect } from "react";
import { useState } from "react";
import fetchCocktail from '../utils/fetchCocktails';
import API_RANDOM from '../constants/API_RANDOM';

import "./GetCocktailsList.css";


const GetCocktailsList = () => {
  const [cocktail, setCocktail] = useState([{}]);
  const cocktailRandom = API_RANDOM;
  
  const {
    strDrink,
    strAlcoholic,
    strInstructions,
    strDrinkThumb,
  } = cocktail[0];

  useEffect( ()=> {
    fetchCocktail(cocktailRandom,setCocktail); 
  },[cocktailRandom]);


  return (
    <>
      {cocktail ? (
        <div className="cardDrink">
          <img className="drinkImg" src={strDrinkThumb} alt={strDrink}/>
          <h1> {strDrink}</h1>
          <h4>{strAlcoholic}</h4>
          <p>{strInstructions}</p>
          <button onClick={() => fetchCocktail(cocktailRandom,setCocktail)}>Another ?</button>
        </div>
      ) : <p>fetching cocktail</p>}
    </>
  );
};

export default GetCocktailsList;
