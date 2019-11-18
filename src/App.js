import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from './ducks/fetchPokemon';
import Template from './components/layout/Template';

class App extends Component {
  state = {
    search: '',
  };

  componentDidUpdate(prevProps) {
    prevProps.pokemon !== this.props.pokemon && !this.props.error &&
      this.props.history.push(`/${this.props.pokemon.name}`)
  }

  handleChange = e => {
    this.setState({
      search: e.target.value,
    });
  }

  render() {
    const {
      fetchPokemon,
      error,
    } = this.props;

    const {
      search,
    } = this.state;

    return (
      <Template>
        <div className="search-bar-wrapper">
          <div className="search-bar-title">Search your favorite pokémon!</div>
          <div className="search-container">
            <input
              type="text"
              id="pokemon_name"
              name="search_pokemon"
              value={search}
              onChange={this.handleChange}
              autoComplete="off"
            />
            <button
              onClick={() => fetchPokemon(search)}
            ><i className="fa fa-search"></i></button>
          </div>
        </div>

        {error && <div className="error">{ error }</div>}
      </Template>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch =>
    bindActionCreators({
      fetchPokemon
    }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);
