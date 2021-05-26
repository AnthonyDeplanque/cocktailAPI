import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetRandomCocktail from './components/GetRandomCocktail';
import GetCategoriesCocktails from './components/GetCategoriesCocktails';
import SearchCocktail from './components/SearchCocktail';
import Footer from './components/Footer';
import DisplayCocktail from './components/DisplayCocktail';
import Navbar from './components/Navbar';
import GetIngredientsCocktails from './components/GetIngredientsCocktails';
import GetFirstLetterCocktails from './components/GetFirstLetterCocktails';

function App() {
  const [agreement, setAgreement] = useState(false);
  const handleAgreement = () => setAgreement(true);

  return agreement ? (
    <>
      <Router>
        <div>
          <Navbar />
          <div className="app">
            <Switch>
              <Route exact path="/">
                <div className="greeting">
                  <h1>Welcome to the cocktail dispenser !</h1>
                  <p>Click on the upper-left icon to navigate in the application.</p>
                </div>
              </Route>
              <Route exact path="/Filter/Category">
                <GetCategoriesCocktails />
              </Route>
              <Route exact path="/Filter/Ingredient">
                <GetIngredientsCocktails />
              </Route>
              <Route path="/RandomCocktail">
                <GetRandomCocktail />
              </Route>
              <Route path="/SearchCocktail">
                <SearchCocktail />
              </Route>
              <Route path="/Cocktail/:idDrink">
                <DisplayCocktail />
              </Route>
              <Route path="/FirstLetter/">
                <GetFirstLetterCocktails />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  ) : (
    <div className="disclaimer">
      <h1>WELCOME TO THE COCKTAIL DISPENSER</h1>
      <p>
        This application uses <a href="https://www.thecocktaildb.com/">the cocktail DB</a>, An open,
        crowd-sourced database of drinks and cocktails from around the world.
        This is the test version of the database,
        used for educational purpose.
        It may have problems to fetch
        informations on this database.
        Don&apos;t mind, and retry later.
      </p>
      <p>by clicking on the &apos;I Agree&apos; button, you certify that you are
        of legal age and you will comply
        with the law in force in your country.
      </p>
      <p>
        Remember that alcohol abuse is
        dangerous for your health, consume in moderation.
      </p>
      <button className="cocktail-button" type="submit" onClick={() => handleAgreement()}>I agree</button>
    </div>
  );
}

export default App;
