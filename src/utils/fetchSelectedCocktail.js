import axios from 'axios';
import API_ID from '../constants/API_ID';

const fetchSelectedCocktail = async (viewCocktail, setViewedCocktail) => {
  await axios
    .get(`${API_ID}${viewCocktail.cocktailId}`)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then((r) => r)
    .then((r) => setViewedCocktail(r[0]));
};
export default fetchSelectedCocktail;
