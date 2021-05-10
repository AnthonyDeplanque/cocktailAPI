import axios from 'axios';

function fetchCocktail(cocktailRandom, setCocktail) {
  axios
    .get(cocktailRandom)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then((cocktailDTO) => setCocktail(cocktailDTO));
}
export default fetchCocktail;
