import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API_ID from '../constants/API_ID';
import Cocktail from './Cocktail';

export default function DisplayCocktail() {
  const cocktailParam = useParams();
  const [cocktail, setCocktail] = useState({});
  useEffect(() => {
    axios
      .get(`${API_ID}${cocktailParam.idDrink}`)
      .then((r) => r.data.drinks)
      .then((r) => setCocktail(r[0]));
  }, []);
  return cocktail && <Cocktail {...cocktail} />;
}
