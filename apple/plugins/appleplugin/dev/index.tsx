import React from 'react';
import { createDevApp } from '@backstage/dev-utils';
import { applepluginPlugin, ApplepluginPage } from '../src/plugin';

createDevApp()
  .registerPlugin(applepluginPlugin)
  .addPage({
    element: <ApplepluginPage />,
    title: 'Root Page',
    path: '/appleplugin',
  })
  .render();
