import React from 'react';
import './CurrentWeatherContainer.css';
import CurrentCondition from './CurrentCondition';

class CurrentWeatherContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  kelvinToFahrenheit(temp) {
    return parseInt(temp * 9 / 5 - 459.67, 10) + 'ºF';
  }

  getCurrTemp(currentWeather) {
    return this.kelvinToFahrenheit(currentWeather.temp);
  }

  getFeelsLike(currentWeather) {
    return this.kelvinToFahrenheit(currentWeather.feels_like);
  }

  getPressure(currentWeather) {
    // convert from hPa to inHg
    return (currentWeather.pressure / 33.864).toFixed(2) + ' in';
  }

  render() {
    return (
      <div className="CurrentWeatherContainer">
        <div className="LocationTextContainer">
          <h3>Now viewing weather for {this.props.locationData}</h3>
        </div>
        <div className="CurrentConditionsContainer">
          <CurrentCondition condition="Curr Temp" value={this.getCurrTemp(this.props.weatherData.current)}/>
          <CurrentCondition condition="Feels Like" value={this.getFeelsLike(this.props.weatherData.current)}/>
          <CurrentCondition condition="Pressure" value={this.getPressure(this.props.weatherData.current)}/>
          <CurrentCondition condition="Humidity" value={this.props.weatherData.current.humidity + '%'}/>
          <CurrentCondition condition="Dew Point" value={this.props.weatherData.current.dew_point}/>
          <CurrentCondition condition="UV Index" value={this.props.weatherData.current.uvi}/>
          <CurrentCondition condition="Wind Speed" value={this.props.weatherData.current.wind_speed + 'mph'}/>
        </div>
      </div>

    );
  }
}

export default CurrentWeatherContainer;
