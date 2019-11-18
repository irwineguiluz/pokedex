import { combineEpics } from 'redux-observable';
import axios from 'axios';
import 'rxjs/add/operator/switchMap';

import {
    FETCH_POKEMON,
    fetchPokemonFailure,
    fetchPokemonSuccess
} from "../ducks/fetchPokemon";

const fetchPokemonEpic = action$ =>
  action$.ofType(FETCH_POKEMON)
    .switchMap(({payload}) =>
      axios.get(`https://pokeapi.co/api/v2/pokemon/${payload.toLowerCase()}`)
      .then(fetchPokemonSuccess)
      .catch(fetchPokemonFailure)
);


export const rootEpic = combineEpics(fetchPokemonEpic);