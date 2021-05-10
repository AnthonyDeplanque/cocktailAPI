import './App.css';
import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import GetRandomCocktail from './components/GetRandomCocktail';
import GetFilteredCocktails from './components/GetFilteredCocktails';
import SearchCocktail from './components/SearchCocktail';
import Footer from './components/Footer';
import DisplayCocktail from './components/DisplayCocktail';
import Navbar from './components/Navbar';

function App() {
  return (
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
  );
}

export default App;
