import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'react-router-dom';
import PageLoader from 'components/Loader/PageLoader';
import SuspenseWithChunkError from 'components/SuspenseWithChunkError';
import NotFound from 'pages/NotFound';
import history from './utils/routerHistory';
import routes, { RouteCustom } from 'routes';
import { PrivateRoute, PublicRoute } from 'layout';

function App() {
  const showRoute = (routes: RouteCustom[]) => {
    let result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return route.isPrivate ? (
          <PrivateRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        ) : (
          <PublicRoute
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
            layout={route.layout}
          />
        );
      });
    }
    return (
      <Switch>
        {result}

        {/* 404 */}
        <Route component={NotFound} />
      </Switch>
    );
  };

  return (
    <Router history={history}>
      <SuspenseWithChunkError fallback={<PageLoader />}>
        {showRoute(routes)}
      </SuspenseWithChunkError>
    </Router>
  );
}

export default App;
