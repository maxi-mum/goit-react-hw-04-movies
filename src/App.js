import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
// import HomePage from './views/HomePage';
// import MoviesPage from './views/MoviesPage';
// import MovieDetailsPage from './views/MovieDetailsPage';
// import NotFoundPage from './views/NotFound';
import routes from './routes';
import AppBar from './components/AppBar';

const HomePage = lazy(() =>
  import('./views/HomePage.js' /* webpackChunkName: "home-page" */),
);
const MoviesPage = lazy(() =>
  import('./views/MoviesPage.js' /* webpackChunkName: "movies-page" */),
);
const MovieDetailsPage = lazy(() =>
  import('./views/MovieDetailsPage.js' /* webpackChunkName: "details-page" */),
);

const App = () => (
  <>
    <AppBar />
    <Suspense fallback={<h1>Загружаем...</h1>}>
      <Switch>
        <Route exact path={routes.home} component={HomePage} />
        <Route exact path={routes.movies} component={MoviesPage} />
        <Route path={routes.movieDetails} component={MovieDetailsPage} />
        <Route component={HomePage} />
      </Switch>
    </Suspense>
  </>
);

export default App;
