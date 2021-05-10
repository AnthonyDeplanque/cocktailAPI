import axios from 'axios';
import API_NAME from '../constants/API_NAME';

function fetchSearchedCocktails(cocktailsToSearch, setFetchedCocktail) {
  axios
    .get(`${API_NAME}${cocktailsToSearch}`)
    .then((r) => r.data.drinks)
    .then(setFetchedCocktail);
}
export default fetchSearchedCocktails;
