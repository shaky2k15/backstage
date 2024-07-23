import {
  createPlugin,
  createRoutableExtension,
} from '@backstage/core-plugin-api';

import { rootRouteRef } from './routes';

export const applepluginPlugin = createPlugin({
  id: 'appleplugin',
  routes: {
    root: rootRouteRef,
  },
});

export const ApplepluginPage = applepluginPlugin.provide(
  createRoutableExtension({
    name: 'ApplepluginPage',
    component: () =>
      import('./components/ExampleComponent').then(m => m.ExampleComponent),
    mountPoint: rootRouteRef,
  }),
);
