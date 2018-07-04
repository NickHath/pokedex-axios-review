import React, { Component } from 'react';
import './App.css';

// components
import Input from './components/Input/Input';
import PokeDisplay from './components/PokeDisplay/PokeDisplay';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemonName: ''
    };
    this.updateName = this.updateName.bind(this);
  }

  updateName(newName) {
    this.setState({ pokemonName: newName });
  }

  render() {
    return (
      <div className='app'>
        <img src='https://t4.rbxcdn.com/1ef0c45ff8a54977ace879eaef624316' />
        <h1>Search for Pokémon</h1>
        <Input updateNameFn={ this.updateName } />
        <p>Your Pokemon is... <br/>{ this.state.pokemonName ? this.state.pokemonName : '' }</p>
        <p>More Info:</p>
        { this.state.pokemonName ? <PokeDisplay name={ this.state.pokemonName } /> : '' }
      </div>
    );
  }
}

export default App;
