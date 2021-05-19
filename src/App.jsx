import './App.css';
import { React, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GetRandomCocktail from './components/GetRandomCocktail';
import GetFilteredCocktails from './components/GetFilteredCocktails';
import SearchCocktail from './components/SearchCocktail';
import Footer from './components/Footer';
import DisplayCocktail from './components/DisplayCocktail';
import Navbar from './components/Navbar';

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
                <GetFilteredCocktails />
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
      </p>
      <p>by clicking on the &apos;I Agree&apos; button, you certify that you are
        of legal age and you will comply
        with the law in force in your country.
      </p>
      <p>
        Remember that alcohol abuse is
        dangerous for your health, consume in moderation.
      </p>
      <button type="submit" onClick={() => handleAgreement()}>I agree</button>
    </div>
  );
}

export default App;
