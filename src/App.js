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

    console.log('props', this.props);

    return (
      <Template>
        <input
          type="text"
          id="pokemon_name"
          name="search_pokemon"
          value={this.state.search}
          onChange={this.handleChange}
        />

        {error && <div>{ error }</div>}

        <button
          onClick={() => fetchPokemon(this.state.search)}
        >Fetch pokemon</button>
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
