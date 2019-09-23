import React, { Component } from 'react';

import AppContainer from './container/AppContainer';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <AppContainer />
      </div>
    );
  }
}
