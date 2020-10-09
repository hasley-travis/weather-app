import React from 'react';
import './WeatherBoard.css';
import WeatherCard from './WeatherCard';

class WeatherBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="WeatherBoard">
        <div className="WeatherContainer">
          <WeatherCard dailyForecast={this.props.weatherData.daily[0]}/>
          <WeatherCard dailyForecast={this.props.weatherData.daily[1]}/>
          <WeatherCard dailyForecast={this.props.weatherData.daily[2]}/>
          <WeatherCard dailyForecast={this.props.weatherData.daily[3]}/>
          <WeatherCard dailyForecast={this.props.weatherData.daily[4]}/>
        </div>
      </div>
    );
  }
}

export default WeatherBoard;
