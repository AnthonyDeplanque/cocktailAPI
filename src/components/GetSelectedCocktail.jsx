import axios from "axios";
import { useEffect, useState } from "react";
import API_ID from "../constants/API_ID";
import "./GetSelectedCocktail.css"

function GetSelectedCocktail(viewCocktail) {
  const [viewedCocktail, setViewedCocktail] = useState({});
  const {
    idDrink,
    strAlcoholic,
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [viewCocktail.cocktailId, idDrink]);

  if (idDrink){ return (
    <div className="cocktail-box">
      <h1>{strDrink}</h1>
      {strDrinkAlternate && <p><em>{strDrinkAlternate}</em></p>}
      <h3>{strAlcoholic}</h3>
      <img className="cocktail-image" src={strDrinkThumb} alt={idDrink}/>
      <p>{strGlass}</p>
      <div className="ingredients-list">
        {strIngredient && <p>{strMeasure1} <strong>{strIngredient}</strong></p>}
        {strIngredient2 && <p>{strMeasure2} <strong>{strIngredient2}</strong></p>}
        {strIngredient3 && <p>{strMeasure3} <strong>{strIngredient3}</strong></p>}
        {strIngredient4 && <p>{strMeasure4} <strong>{strIngredient4}</strong></p>}
        {strIngredient5 && <p>{strMeasure5} <strong>{strIngredient5}</strong></p>}
        {strIngredient6 && <p>{strMeasure6} <strong>{strIngredient6}</strong></p>}
        {strIngredient7 && <p>{strMeasure7} <strong>{strIngredient7}</strong></p>}
        {strIngredient8 && <p>{strMeasure8} <strong>{strIngredient8}</strong></p>}
        {strIngredient9 && <p>{strMeasure9} <strong>{strIngredient9}</strong></p>}
        {strIngredient10 && <p>{strMeasure10} <strong>{strIngredient10}</strong></p>}
        {strIngredient11 && <p>{strMeasure11} <strong>{strIngredient11}</strong></p>}
        {strIngredient12 && <p>{strMeasure12} <strong>{strIngredient12}</strong></p>}
        {strIngredient13 && <p>{strMeasure13} <strong>{strIngredient13}</strong></p>}
        {strIngredient14 && <p>{strMeasure14} <strong>{strIngredient14}</strong></p>}
        {strIngredient15 && <p>{strMeasure15} <strong>{strIngredient15}</strong></p>}
        </div>  
        {strInstructions && <p>{strInstructions}</p>}
    </div>
  ); }
  else return null;
}
export default GetSelectedCocktail;
