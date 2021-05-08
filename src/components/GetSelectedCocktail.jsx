import axios from "axios";
import { useEffect, useState } from "react";
import API_ID from "../constants/API_ID";

function GetSelectedCocktail(viewCocktail) {
  const [viewedCocktail, setViewedCocktail] = useState({});
  const {
    idDrink,
    strAlcoholic,
    strCategory,
    strCreativeCommonsConfirmed,
    strDrink,
    strDrinkAlternate,
    strDrinkThumb,
    strGlass,
    strIBA,
    strImageAttribution,
    strImageSource,
    strIngredient,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strInstructions,
    strInstructionsDE,
    strInstructionsES,
    strInstructionsFR,
    strInstructionsIT,
    strMeasure1,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
  } = viewedCocktail;

useEffect(() => {
 axios
  .get(`${API_ID}${viewCocktail.cocktailId}`)
  .then(r=> r.data)
  .then(r=> r.drinks)
  .then(r=>r)
  .then(r=>setViewedCocktail(r[0]));
  console.log(viewedCocktail);
  }, [idDrink]);

  if (idDrink){ return (
    <div className="cocktail-box">
      <h1>{strDrink}</h1>

      </div>
  ); }
  else return null;
}
export default GetSelectedCocktail;
