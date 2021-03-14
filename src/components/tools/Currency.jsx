import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Currency extends Component {
  constructor(props) {
    super(props);
    this.state = { data: '' };
  }

  componentDidMount() {
    const { arrives, out } = this.props;
    const access = `${arrives}_${out}`;
    const urlQuery = `https://free.currconv.com/api/v7/convert?q=${access}&compact=ultra&apiKey=327a6ca3039328c74676`;

    fetch(urlQuery).then((data) => data.json())
      .then((data) => {
        const currency = `1${arrives}=${data[access]}${out}`;
        this.setState({ data: currency });
      });
  }

  render() {
    return (
                  <div>
                      {this.state.data}
                  </div>
    );
  }
}

Currency.propTypes = {
  arrives: PropTypes.string.isRequired,
  out: PropTypes.string.isRequired,
};
