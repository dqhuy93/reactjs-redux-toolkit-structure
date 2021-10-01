import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { LOGIN_URL, TOKEN_KEY } from 'config';

const PrivateRouteMode = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => {
  return (
    <Route
      {...rest}
      render={props =>
        window.localStorage.getItem(TOKEN_KEY) ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: LOGIN_URL,
            }}
          />
        )
      }
    />
  );
};

export { PrivateRouteMode as PrivateRoute };
