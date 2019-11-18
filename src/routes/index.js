import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import App from '../App';
import PokemonProfile from '../components/PokemonProfile';

class Main extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={App} />
          <Route path='/:pokemon' component={PokemonProfile} />
        </Switch>
      </main>
    )
  }
}

export default Main;