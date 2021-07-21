import Navbar from './components/nav'
import Enter from './components/enter'
import Home from './components/home'
import Photography from './components/photography'
import Nature from './components/galleries/nature'
import Festival from './components/festival'
// import RecipeDetails from './components/recipeDetails'
import { Switch, Route} from "react-router-dom";
import React, { useState, useEffect } from 'react';
// import { TransitionGroup, CSSTransition} from 'react-transition-group'
import { AnimatedSwitch, spring } from 'react-router-transition'
// import { useLocation } from 'react-router-dom'
import './assets/styles.css'
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

function App() {


  return (
    <div>

        <Navbar/>
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="route-wrapper"
        >
                <Route exact path="/" component={Enter}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/photography/" component={Photography}/>
                <Route exact path="/photography/nature" component={Nature}/>
                <Route exact path="/photography/" component={Photography}/>
                <Route exact path="/festivals" component={Festival}/>
        </AnimatedSwitch>

    </div>
  )
}

export default App;