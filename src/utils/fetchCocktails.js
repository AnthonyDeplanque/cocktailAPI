import axios from 'axios';

const fetchCocktail = async (cocktailRandom, setCocktail) => {
  await axios
    .get(cocktailRandom)
    .then((r) => r.data)
    .then((r) => r.drinks)
    .then((cocktailDTO) => setCocktail(cocktailDTO));
};

export default fetchCocktail;
