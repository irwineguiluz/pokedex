import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPokemon } from '../ducks/fetchPokemon';
import Template from './layout/Template';
import PokemonInfoItem from './PokemonProfile/PokemonInfoItem';

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

    return (
      <Template>
        { isLoading ? <h2>Searching pokémon</h2> :
          <div>
            <Link to='/' className="back-link">Back</Link>
            <div className="pokemon__profile">
              <div className="pokemon__avatar">
                <img
                  alt=""
                  src={pokemon.sprites && pokemon.sprites.front_default}
                />
              </div>
              <div className="pokemon__title">
                <div className="pokemon__name">{pokemon.name}</div>
                <div className="pokemon__id">#{pokemon.id}</div>
              </div>
              <div className="pokemon__info">
                <h3>Profile</h3>
                <div className="pokemon__info-item">
                  <div className="item-label">Types</div>
                  <div className="item-detail">
                    {pokemon.types && pokemon.types.map(item => (
                      `${item.type.name} | `
                    ))}
                  </div>
                </div>
                <PokemonInfoItem label="Height" detail={pokemon.height} />
                <PokemonInfoItem label="Weight" detail={pokemon.weight} />
                <div className="pokemon__info-item">
                  <div className="item-label">Abilities</div>
                  <div className="item-detail">
                    {pokemon.abilities && pokemon.abilities.map(item => (
                      `${item.ability.name} | `
                    ))}
                  </div>
                </div>
                <h3>Stats</h3>
                {pokemon.stats && pokemon.stats.map((item, index) => (
                  <PokemonInfoItem key={index} label={item.stat.name} detail={item.base_stat} />
                ))}
              </div>
              <div style={{
                  backgroundImage: `url(${pokemon.sprites && pokemon.sprites.front_default})`
                }}
                className="pokedex__bg-image"
              ></div>
            </div>
          </div>
        }
      </Template>
    );
  }
}

const mapStateToProps = state => ({ ...state });

export default connect(mapStateToProps, {fetchPokemon})(PokemonProfile);