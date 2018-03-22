import React from 'react';
import App from './App';
import Nav from './Nav';
import HomePage from './pages/HomePage';
import CreateProjectPage from './pages/CreateProjectPage';
import ProjectPage from './pages/ProjectPage';
import VersionListPage from './pages/VersionListPage';
import VersionPage from './pages/VersionPage';

import NotFoundPage from './pages/NotFoundPage';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true,
      },
      {
        ...CreateProjectPage,
        path: '/create-project',
        exact: true
      },
      {
        ...Nav,
        path: '/projects/:id',
        routes: [
          {
            ...ProjectPage,
            path: '/projects/:id',
            exact: true
          },
          {
            ...VersionListPage,
            path: '/projects/:id/versions',
            exact: true
          },
          {
            ...VersionPage,
            path: '/projects/:id/versions/new'
          }
        ]
      }
      /*{
        ...AdminsListPage,
        path: '/admins',
      },
      {
        ...UsersListPage,
        path: '/users',
      },
      {
        ...NotFoundPage,
      },*/
    ],
  },
];
