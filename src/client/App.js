import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Helmet } from 'react-helmet';

const App = ({ route }) => {
  return (
    <div>
      <Helmet>
        <title>Cencosud Microservices</title>
      </Helmet>
      {renderRoutes(route.routes)}
    </div>
  );
};

export default {
  component: App
};
