import React from "react";
import { Switch, Route } from "react-router-dom";
import AppBar from '../AppBar/AppBar';
import HomePage from "../HomePage/HomePage";
import MoviesPage from "../MoviesPage/MoviesPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import MovieDetailsPage from "../MovieDetailsPage/MovieDetailsPage";

export default function App () {

  return (
    <>
    <AppBar />
    
    <Switch>
      <Route path="/" exact>
      <HomePage />
      </Route>

      <Route path="/movies" exact>
        <MoviesPage />
      </Route>
        
      <Route path="/movies/:movieId">
        <MovieDetailsPage />
      </Route>

      <Route>
        <NotFoundPage />
      </Route>
    </Switch>
    </>
  )
};