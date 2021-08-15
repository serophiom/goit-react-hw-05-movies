import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const AppBar = lazy(() => import('../AppBar/AppBar.js'));
const HomePage = lazy(() => import('../HomePage/HomePage.js'));
const MoviesPage = lazy(() => import('../MoviesPage/MoviesPage.js'));
const NotFoundPage = lazy(() => import('../NotFoundPage/NotFoundPage.js'));
const MovieDetailsPage = lazy(() => import('../MovieDetailsPage/MovieDetailsPage.js'));

export default function App () {

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
    </>
  )
};