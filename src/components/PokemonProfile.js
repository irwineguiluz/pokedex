import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemon } from '../ducks/fetchPokemon';
import Template from './layout/Template';

class PokemonProfile extends Component {
  componentDidMount() {
    if (!this.props.pokemon.length) {
      this.props.fetchPokemon(this.props.match.params.pokemon)
    }
  }

  componentDidUpdate(prevProps) {
    prevProps.error !== this.props.error && this.props.error &&
      this.props.history.push('/');
  }

  render() {
    const {
      pokemon,
      isLoading,
    } = this.props;

    console.log(pokemon);

    return (
      <Template>
        { isLoading ? <h2>Searching pokémon</h2> :
          <div>
            <Link to='/'>Back</Link>
            <h2>Id #{pokemon.id}</h2>
            <img
              alt=""
              style={{ width: '300px', height: '300px' }}
              src={pokemon.sprites && pokemon.sprites.front_default}
            />
            <h3>{pokemon.name}</h3>
          </div>
        }
      </Template>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {fetchPokemon})(PokemonProfile);