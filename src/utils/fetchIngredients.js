import axios from 'axios';
import API_INGREDIENTS from '../constants/API_INGREDIENTS';

const fetchIngredients = async (setIngredients) => {
  await axios
    .get(API_INGREDIENTS)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then(setIngredients);
};
export default fetchIngredients;
