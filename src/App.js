import axios from 'axios';
import React from 'react';

import './App.css';
import CurrentWeatherContainer from './CurrentWeatherContainer';
import SearchBoard from './SearchBoard';
import WeatherBoard from './WeatherBoard';
import sampleApiResponse from './sample_api_response';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: 'Boston',
      locationData: sampleApiResponse.locationData,
      weatherData: sampleApiResponse.weatherData,
    };

    this.handleSearchChange.bind(this);
    this.handleSearchClick.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:8081/weather?q=New York City`)
      .then(response => {
        this.setState({
          locationData: response.data.locationData,
          weatherData: response.data.weatherData
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        alert("Search confidence too low for string 'New York City'. Try searching a different way.");
      });
  }

  handleSearchChange = (e) => {
    this.setState({ searchInput: e.target.value });
  }

  handleSearchClick = (e) => {
    axios.get(`http://localhost:8081/weather?q=${this.state.searchInput}`)
      .then(response => {
        this.setState({
          locationData: response.data.locationData,
          weatherData: response.data.weatherData
        });
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
        alert(`Search confidence too low for string '${this.state.searchInput}'. Try again with a different search.`);
      });
  }

  render() {
    return (
      <div className="App">
        <SearchBoard handleSearchChange={this.handleSearchChange} handleSearchClick={this.handleSearchClick}/>
        <CurrentWeatherContainer locationData={this.state.locationData} weatherData={this.state.weatherData}/>
        <WeatherBoard weatherData={this.state.weatherData}/>
      </div>
    );
  }
}

export default App;
