import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetRandomCocktail from './components/GetRandomCocktail';
import GetFilteredCocktails from './components/GetFilteredCocktails';
import SearchCocktail from './components/SearchCocktail';
import Footer from './components/Footer';
function App() {
  return (
    <div className="app">
<Router>
      <div>
        <nav>
          <ul>
              <li>
              <Link to="/">Filtered Cocktails</Link>
            </li>
            <li>
              <Link to="/RandomCocktail">Random Cocktail</Link>
            </li>
            <li>
              <Link to="/SearchCocktail">Search a Cocktail</Link>
            </li>
          </ul>
        </nav>

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
        </Switch>
        <Footer />
      </div>
    </Router>
    </div>
  );
}

export default App;
