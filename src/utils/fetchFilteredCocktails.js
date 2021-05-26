import axios from 'axios';

const fetchFilteredCocktails = async (cocktails, filters, setFiltered) => {
  await axios
    .get(cocktails)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then(setFiltered);
};
export default fetchFilteredCocktails;
