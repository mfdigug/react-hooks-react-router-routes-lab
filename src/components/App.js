import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies } from "../data";

function App() {
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route> 
      <Route path="/actors">
        <Actors />
      </Route> 
      <Route path="/directors"> 
        <Directors />
      </Route>
      <Route path="/movies"> 
        <Movies movies={movies} />
      </Route>
    </Switch>
  </div>;
}

export default App;
