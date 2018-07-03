import React, { Component } from 'react';

class Input extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  updateInput(newInput) {
    this.setState({ input: newInput });
  }

  render() {
    return (
      <div className='input'>
        <input onChange={ e => this.updateInput(e.target.value) }/>
        <button onClick={ () => this.props.updateNameFn(this.state.input) }>Save</button>
      </div>
    );
  }
}

export default Input;