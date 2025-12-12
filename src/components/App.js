import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, directors, actors } from "../data";

const moviesData = movies;
const directorsData = directors;
const actorsData = actors;


function App() {
  return <div>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route> 
      <Route path="/actors">
        <Actors actorsData={actorsData}/>
      </Route> 
      <Route path="/directors"> 
        <Directors directors={directorsData}/>
      </Route>
      <Route path="/movies"> 
        <Movies movies={moviesData} />
      </Route>
    </Switch>
  </div>;
}

export default App;
