import React, { Component, Fragment } from 'react';
import './App.css';

class App extends Component {
  foo = () => 'Bar';
  render() {
    let name = 'shubham';
    return (
      <Fragment>
        <h1>Hello {name.toUpperCase()}</h1>
        {this.foo()}
      </Fragment>
    );
  }
}

export default App;
