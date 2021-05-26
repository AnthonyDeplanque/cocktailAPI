import axios from 'axios';
import API_CATEGORIES from '../constants/API_CATEGORIES';

const fetchCategories = async (setCategories) => {
  await axios
    .get(API_CATEGORIES)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then(setCategories);
};
export default fetchCategories;
