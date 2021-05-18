import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ThisCountryDate: new Date(),
      diff: 0,
      lang: 'en-us'
    };
  }

  componentDidMount() {
    this.time();
  }

  componentDidUpdate(prevProps) {
    const { lang } = this.props;

    if (prevProps.lang !== lang) {
      this.time();
    }
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick = () => {
    this.setState((state) => ({
      ThisCountryDate: new Date(Date.now() + state.diff)
    }));
  };

  time() {
    const { lang, UTC } = this.props;

    const ThisUTC = new Date().getTimezoneOffset();
    const NeedUTC = UTC % 13 ? -UTC % 13 : 0;
    const diff = (ThisUTC - NeedUTC * 60) * 60 * 1000;
    this.setState({
      ThisCountryDate: new Date(Date.now() + diff),
      diff,
      lang: lang === 0 ? 'en-us' : lang === 1 ? 'ru-ru' : 'by-by'
    });

    this.timerID = setInterval(() => this.tick(), 1000);
  }

  render() {
    const { ThisCountryDate, lang } = this.state;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return (
      <div className="time">
        <p>{ThisCountryDate.toLocaleDateString(lang, options)}</p>
        <p>{ThisCountryDate.toLocaleTimeString()}</p>
      </div>
    );
  }
}

Time.propTypes = {
  UTC: PropTypes.string,
  lang: PropTypes.string
};
