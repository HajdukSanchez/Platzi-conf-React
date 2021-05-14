import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Layout from './Layout';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/home" component={Home} />
          <Redirect from="/" to="/home" />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

