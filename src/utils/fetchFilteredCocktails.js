import axios from 'axios';

const fetchFilteredCocktails = (cocktails, filters, setFiltered) => {
    axios
      .get(cocktails)
      .then((r) => r.data)
      .then((r) => r.drinks)
      .then(setFiltered);
  };
  export default fetchFilteredCocktails;