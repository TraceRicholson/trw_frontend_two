import Navbar from './components/nav'
import Enter from './components/enter'
import Home from './components/home'
import Photography from './components/photography'
import Nature from './components/galleries/nature'
import Festival from './components/festival'
// import RecipeDetails from './components/recipeDetails'
import { Switch, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { TransitionGroup, CSSTransition} from 'react-transition-group'
// import { AnimatedSwitch } from 'react-router-transition'
import { useLocation } from 'react-router-dom'


function App() {

  const location = useLocation()

  return (
    <div>

        <Navbar/>
        <Switch

        >
          <Route exact path="/" component={Enter}/>
            <div>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/photography/" component={Photography}/>
                <Route exact path="/photography/nature" component={Nature}/>
                <Route exact path="/photography/" component={Photography}/>
                {/* <Route path="/recipes/:id" component={RecipeDetails}/> */}
                <Route exact path="/festivals" component={Festival}/>
            </div>
        </Switch>

    </div>
  )
}

export default App;