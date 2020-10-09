import React from 'react';
import './WeatherCard.css';

class WeatherCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  getDateInfo() {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    console.log(this.props);

    const dateInfo = new Date(this.props.dailyForecast.dt * 1000);

    return {
      date: dateInfo.getDate(),
      day: daysOfWeek[dateInfo.getDay()],
      month: dateInfo.getMonth(),
    };
  }

  getDay() {
    return this.getDateInfo().day;
  }

  getMonth() {
    return this.getDateInfo().month + 1;
  }

  getDate() {
    return this.getDateInfo().date;
  }

  getWeatherConditions() {
    return this.props.dailyForecast.weather[0].description;
  }

  getLoTemp() {
    const lo = this.props.dailyForecast.temp.min;
    return parseInt(lo * 9 / 5 - 459.67, 10) + 'ºF';
  }

  getHiTemp() {
    const hi = this.props.dailyForecast.temp.max;
    return parseInt(hi * 9 / 5 - 459.67, 10) + 'ºF';
  }

  getWeatherIcon() {
    return `http://openweathermap.org/img/wn/${this.props.dailyForecast.weather[0].icon}.png`;
  }

  render() {
    return (
      <div className="WeatherCard">
        <div className="Day">{this.getDay()} {this.getMonth()}/{this.getDate()}</div>
        <img className="WeatherImage" src={this.getWeatherIcon()} alt="Weather Icon"></img>
        <div className="WeatherConditions">{this.getWeatherConditions()}</div>
        <div className="Temperatures">
          <div className="LoTemp">{this.getLoTemp()}</div>
          <div className="HiTemp">{this.getHiTemp()}</div>
        </div>
      </div>
    );
  }
}

export default WeatherCard;
