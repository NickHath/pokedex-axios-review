import React, { Component } from 'react';

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
      <div className="app">
        <h1>Be the very best, that no one ever was</h1>
        <Input updateNameFn={ this.updateName } />
        <p>Your Pokemon is... { this.state.pokemonName ? this.state.pokemonName : '' }</p>
        <p>More Info:</p>
        { this.state.pokemonName ? <PokeDisplay name={ this.state.pokemonName } /> : '' }
      </div>
    );
  }
}

export default App;
