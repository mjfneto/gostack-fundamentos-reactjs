import React from 'react';

import { Switch, Route, useLocation } from 'react-router-dom';

import Header from '../components/Header';

import Dashboard from '../pages/Dashboard';
import Import from '../pages/Import';

const Routes: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Header size={pathname === '/import' ? 'small' : undefined} />
      <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/import" component={Import} />
      </Switch>
    </>
  );
};

export default Routes;
