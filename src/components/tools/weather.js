import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      WeatherData: {}
    };
  }

  componentDidMount() {
    this.wetherGet();
  }

  componentDidUpdate(prevProps) {
    const { lang } = this.props;

    if (prevProps.lang !== lang) {
      this.wetherGet();
    }
  }

  wetherGet = () => {
    const { lang, lat, lon } = this.props;
    const urlQuery = `http://api.openweathermap.org/data/2.5/weather?lang=${lang}&lat=${lat}&lon=${lon}&appid=4146c38d01d60ac4249d0bbc80a1cffa`;

    fetch(urlQuery)
      .then((weatherData) => weatherData.json())
      .then((data) => {
        this.setState({
          WeatherData: data
        });
      });
  };

  render() {
    const { WeatherData } = this.state;

    if (WeatherData && WeatherData.weather) {
      const temp = Math.round(WeatherData.main.temp - 273);

      return (
        <div className="weather">
          <img
            src={`http://openweathermap.org/img/wn/${WeatherData.weather[0].icon}@2x.png`}
            alt="weather"
          />
          <div>
            {`${+temp > 0 ? `+${temp}` : temp}C, `}
            {WeatherData.weather[0].description}
          </div>
        </div>
      );
    }
    return <div>nothing</div>;
  }
}

Weather.propTypes = {
  lang: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lon: PropTypes.number.isRequired
};
