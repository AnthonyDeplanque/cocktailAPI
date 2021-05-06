import axios from "axios";
import { useEffect, useState } from "react";
import API_ID from "../constants/API_ID";

function GetSelectedCocktail(viewCocktail) {
  const [viewedCocktail, setViewedCocktail] = useState({});

useEffect(() => {
 axios
  .get(`${API_ID}${viewCocktail.cocktailId}`)
  .then(r=> r.data)
  .then(r=> r.drinks)
  .then(r=>(r[0]))
  .then(setViewedCocktail);
  console.log(viewedCocktail)
  }, [viewCocktail]);

  return (
    <div className="cocktail-box">
      </div>
  );
}
export default GetSelectedCocktail;
