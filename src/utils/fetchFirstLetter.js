import axios from 'axios';
import API_COCKTAIL_FIRST_LETTER from '../constants/API_FIRST_LETTER';

const fetchFirstLetter = async (filters, setFiltered) => {
  await axios
    .get(API_COCKTAIL_FIRST_LETTER + filters)
    .then((r) => r.data.drinks)
    .then(setFiltered);
};

export default fetchFirstLetter;
