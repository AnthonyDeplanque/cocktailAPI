import axios from 'axios';
import API_INGREDIENTS from '../constants/API_INGREDIENTS';

const fetchIngredients = (setIngredients) => {
  axios
    .get(API_INGREDIENTS)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then(setIngredients);
};
export default fetchIngredients;
