import Navbar from './components/nav'
import Enter from './components/enter'
import Home from './components/home'
import Photography from './components/photography'
// import Favorites from './components/favorites'
// import RecipeDetails from './components/recipeDetails'
import { Switch, Route} from "react-router-dom";
import React from 'react';

function App() {
  return (
    <div>
        <Switch>
        <Navbar/>
          <Route exact path="/" component={Enter}/>
        <Route exact path="/home" component={Home}/>
          <Route path="/photography/" exact component={Photography}/>
          {/* <Route path="/recipes/:id" component={RecipeDetails}/> */}
          {/* <Route exact path="/favorites" component={Favorites}/> */}
        </Switch>
    </div>
  )
}

export default App;