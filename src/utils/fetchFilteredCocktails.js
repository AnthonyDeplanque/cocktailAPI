import axios from 'axios';
import { API_FILTER } from '../constants/API';

const fetchFilteredCocktails = (cocktails, setCocktails, filters, setFiltered) => {
    axios
      .get(cocktails)
      .then((r) => r.data)
      .then((r) => r.drinks)
      .then(setFiltered);
    setCocktails(API_FILTER + filters);
  };
  export default fetchFilteredCocktails;