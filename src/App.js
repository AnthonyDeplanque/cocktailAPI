import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GetCocktailsList from './components/GetCocktailsList';
import GetFilteredCocktails from './components/GetFilteredCocktails';
function App() {
  return (
    <>
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
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <GetFilteredCocktails />
          </Route>
          <Route path="/RandomCocktail">
            <GetCocktailsList />
          </Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}

export default App;
