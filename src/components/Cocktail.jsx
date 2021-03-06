/* eslint-disable react/prop-types */
import './Cocktail.css';

export default function Cocktail({ ...props }) {
  const {
    idDrink,
    strDrink,
    strAlcoholic,
    strDrinkAlternate,
    strDrinkThumb,
    strGlass,
    strIngredient,
    strIngredient10,
    strIngredient11,
    strIngredient12,
    strIngredient13,
    strIngredient14,
    strIngredient15,
    strIngredient2,
    strIngredient3,
    strIngredient4,
    strIngredient5,
    strIngredient6,
    strIngredient7,
    strIngredient8,
    strIngredient9,
    strInstructions,
    strMeasure1,
    strMeasure10,
    strMeasure11,
    strMeasure12,
    strMeasure13,
    strMeasure14,
    strMeasure15,
    strMeasure2,
    strMeasure3,
    strMeasure4,
    strMeasure5,
    strMeasure6,
    strMeasure7,
    strMeasure8,
    strMeasure9,
  } = props;
  return (
    <div className="card-block">
      <div className="cardDrink">
        {strDrink ? (
          <div className="inner-cardDrink">
            <img
              className="cocktail-image"
              src={strDrinkThumb}
              alt={idDrink}
            />
            <h1>{strDrink}</h1>
            {strDrinkAlternate && (
              <p>
                <em>{strDrinkAlternate}</em>
              </p>
            )}
            <div className="cocktail-elements">
              <div className="cocktail-intro">
                <h3>{strAlcoholic}</h3>
                <p>
                  serve in a <strong>{strGlass}</strong>
                </p>
              </div>
              <div className="cocktail-making">
                <div className="ingredients-list">
                  <ul>
                    {strIngredient && (
                      <li className="ingredient">
                        {strMeasure1} <strong>{strIngredient}</strong>
                      </li>
                    )}
                    {strIngredient2 && (
                      <li className="ingredient">
                        {strMeasure2} <strong>{strIngredient2}</strong>
                      </li>
                    )}
                    {strIngredient3 && (
                      <li className="ingredient">
                        {strMeasure3} <strong>{strIngredient3}</strong>
                      </li>
                    )}
                    {strIngredient4 && (
                      <li className="ingredient">
                        {strMeasure4} <strong>{strIngredient4}</strong>
                      </li>
                    )}
                    {strIngredient5 && (
                      <li className="ingredient">
                        {strMeasure5} <strong>{strIngredient5}</strong>
                      </li>
                    )}
                    {strIngredient6 && (
                      <li className="ingredient">
                        {strMeasure6} <strong>{strIngredient6}</strong>
                      </li>
                    )}
                    {strIngredient7 && (
                      <li className="ingredient">
                        {strMeasure7} <strong>{strIngredient7}</strong>
                      </li>
                    )}
                    {strIngredient8 && (
                      <li className="ingredient">
                        {strMeasure8} <strong>{strIngredient8}</strong>
                      </li>
                    )}
                    {strIngredient9 && (
                      <li className="ingredient">
                        {strMeasure9} <strong>{strIngredient9}</strong>
                      </li>
                    )}
                    {strIngredient10 && (
                      <li className="ingredient">
                        {strMeasure10} <strong>{strIngredient10}</strong>
                      </li>
                    )}
                    {strIngredient11 && (
                      <li className="ingredient">
                        {strMeasure11} <strong>{strIngredient11}</strong>
                      </li>
                    )}
                    {strIngredient12 && (
                      <li className="ingredient">
                        {strMeasure12} <strong>{strIngredient12}</strong>
                      </li>
                    )}
                    {strIngredient13 && (
                      <li className="ingredient">
                        {strMeasure13} <strong>{strIngredient13}</strong>
                      </li>
                    )}
                    {strIngredient14 && (
                      <li className="ingredient">
                        {strMeasure14} <strong>{strIngredient14}</strong>
                      </li>
                    )}
                    {strIngredient15 && (
                      <li className="ingredient">
                        {strMeasure15} <strong>{strIngredient15}</strong>
                      </li>
                    )}
                  </ul>
                </div>
                {strInstructions && <p>{strInstructions}</p>}
              </div>
            </div>
          </div>
        ) : (
          <p>Now loading</p>
        )}
      </div>
    </div>
  );
}
