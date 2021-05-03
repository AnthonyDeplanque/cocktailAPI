import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./GetCocktailsList.css";

const API_RANDOM = "https://www.thecocktaildb.com/api/json/v1/1/random.php";

const GetCocktailsList = () => {
  const [cocktail, setCocktail] = useState([{}]);
  const [cocktailRandom, setCocktailRandom] = useState(API_RANDOM);

  const {
    strDrink,
    strAlcoholic,
    strInstructions,
    strDrinkThumb,
  } = cocktail[0];
  useEffect(() => {
      fetchCocktail();
}, []);
function fetchCocktail(){
      axios
        .get(cocktailRandom)
        .then((r) => r.data)
        .then((r) => r.drinks)
        .then((cocktailDTO)=>setCocktail(cocktailDTO));
  }

  return (
    <>
      {cocktail ? (
        <div className="cardDrink">
          <img className="drinkImg" src={strDrinkThumb} />
          <h1> {strDrink}</h1>
          <h4>{strAlcoholic}</h4>
          <p>{strInstructions}</p>
          <button onClick={fetchCocktail}>Another ?</button>
        </div>
      ) : <p>fetching cocktail</p>}
    </>
  );
};

export default GetCocktailsList;
