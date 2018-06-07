import React, { Component, Fragment } from 'react';
import Form from './components/Form';
import Titles from './components/Titles';
import Weather from './components/Weather';
import './App.css';

// my personal api key
const API_KEY = '53156c8bfca9a7c97cbf1e0d210c8d3b';

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    // prevent the full page reload
    e.preventDefault();

    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    // async api call
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    // gather the data from the call and store it as JSON
    const data = await api_call.json();

    if (city && country) {
      console.log(data);
      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ''
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: 'Please enter a value'
      });
    }
  };

  render() {
    return (
      <Fragment>
        <Titles />
        <Form getWeather={this.getWeather} />
        <Weather
          city={this.state.city}
          country={this.state.country}
          temperature={this.state.temperature}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
        />
      </Fragment>
    );
  }
}

export default App;
