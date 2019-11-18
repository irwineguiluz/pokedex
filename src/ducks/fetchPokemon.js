// constants
export const FETCH_POKEMON = 'FETCH_POKEMON';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// action creators
export const fetchPokemon = (payload) => ({
    type: FETCH_POKEMON,
    payload,
});

export const fetchPokemonSuccess = (pokemon) => ({
  type: FETCH_POKEMON_SUCCESS,
  payload: pokemon,
});

export const fetchPokemonFailure = (message) => ({
    type: FETCH_POKEMON_FAILURE,
    payload: message,
});

// reducer
const initialState = {
  pokemon: {},
  isLoading: false,
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_POKEMON:
        return {
            ...state,
            isLoading: true,
            error: null
        };
    case FETCH_POKEMON_SUCCESS:
        return {
            ...state,
            pokemon: action.payload.data,
            isLoading: false,
            error: null,
        };
    case FETCH_POKEMON_FAILURE:
        return {
            pokemon: {},
            isLoading: false,
            error: action.payload.response.data
        };
    default:
        return state;
  }
}