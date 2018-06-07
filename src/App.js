import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import './App.css';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Titles />
        <Weather />
        <Form />
      </Fragment>
    );
  }
}

export default App;
