import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { GameRooms } from './components/GameRooms';
import { Game } from './components/Game';
import { Rank } from './components/Rank';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';
import ApiAuthorizationRoutes from './components/api-authorization/ApiAuthorizationRoutes';
import { ApplicationPaths } from './components/api-authorization/ApiAuthorizationConstants';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
        <AuthorizeRoute path='/GameRooms' component={GameRooms} />
        <AuthorizeRoute path='/Game/1' component={Game} />
        <AuthorizeRoute path='/Rank' component={Rank} />
      </Layout>
    );
  }
}
