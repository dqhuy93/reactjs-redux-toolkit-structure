import React from 'react';

import { PrivateLayout } from './layout/PrivateLayout';
import { PublicLayout } from './layout/PublicLayout';

const Counter = React.lazy(() => import('components/Counter'));

export interface RouteCustom {
  path: string;
  exact?: true;
  layout: any;
  main: any;
  isPrivate?: boolean;
}

const routes: RouteCustom[] = [
  {
    path: '/',
    exact: true,
    layout: PublicLayout,
    main: Counter,
  },
  // {
  //   path: '/login',
  //   exact: true,
  //   layout: PublicLayout,
  //   main: LoginPage
  // }
];

export default routes;
