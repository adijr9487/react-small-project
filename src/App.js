import React from "react"
import {Route, Switch} from "react-router-dom"

//component
import Home from "./components/Home/Home"

import Todo from "./components/Project/Todo/Todo"


//classes
import classes from "./App.css"

function App() {
  return(
    <div className={classes.App}>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/Todo" exact component={Todo}/>
      </Switch>
    </div>
  )
}
  
export default App;
