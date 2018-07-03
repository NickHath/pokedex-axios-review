import React, { Component } from 'react';
import axios from 'axios';

class PokeDisplay extends Component {
  constructor() {
    super();
    this.state = {
      pokemonDesc: {}
    };
  }

  componentDidMount() {
    console.log('PokeDisplay mounted');
    this.catchPokemon();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.name !== this.props.name) {
      console.log('PokeDisplay updated');
      this.catchPokemon();
    }
  }

  catchPokemon() {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon`;
    axios.get(`${baseUrl}/${this.props.name}/`)
         .then(res => {
           this.setState({ pokemonDesc: res.data });
          })
         .catch(err => console.log(err));  
  }

  render() {
    return (
      <div className='pokedisplay'>
        {/* { JSON.stringify(this.state.pokemonDesc) } */}
        { JSON.stringify(this.state.pokemonDesc.forms) }
      </div>
    );
  }
}

export default PokeDisplay;