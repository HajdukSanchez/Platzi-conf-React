import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BadgeNew from '../pages/BadgeNew';
import BadgeEdit from '../pages/BadgeEdit';
import Badges from '../pages/Badges';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import Layout from './Layout';
import BadgeDetailsConatiner from '../pages/BadgeDetailsContainer';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route exact path="/badges/:id" component={BadgeDetailsConatiner} />
          <Route exact path="/badges/:id/edit" component={BadgeEdit} />
          <Route exact component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

