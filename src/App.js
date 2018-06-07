import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import './App.css';

// my personal api key
const API_KEY = '53156c8bfca9a7c97cbf1e0d210c8d3b';

class App extends Component {
  getWeather = async () => {
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    // gather the data from the call and store it as JSON
    const data = await api_call.json();
  };

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
