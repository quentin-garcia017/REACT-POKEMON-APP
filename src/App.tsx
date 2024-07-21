import React, { FunctionComponent } from "react";
import PokemonList from "./pages/pokemon-list";
import PokemonsDetail from "./pages/pokemon-detail";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

const App: FunctionComponent = () => {
  return (
    <Router>
      <div>
        {/* La barrde de navigation comme à toutes les pages est ici */}
        <nav>
          <div className="nav-wrapper teal">
            <Link to="/" className="brand-logo center">
              Pokédex
            </Link>
          </div>
        </nav>
        {/* Le système de gestion des routes de notre application est ici */}
        <Switch>
          <Route exact path="/" component={PokemonList} />
          <Route exact path="/pokemons" component={PokemonList} />
          <Route exact path="/pokemons/:id" component={PokemonsDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
