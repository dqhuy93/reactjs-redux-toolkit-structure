import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
