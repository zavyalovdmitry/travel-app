import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Currency from './Currency';

export default class ExchangeRates extends Component {
  render() {
    const { currency } = this.props;

    return (
            <div>
                <Currency arrives={currency} out={'EUR'}/>
                <Currency arrives={currency} out={'USD'}/>
                <Currency arrives={currency} out={'RUB'}/>
            </div>
    );
  }
}

ExchangeRates.propTypes = {
  currency: PropTypes.string.isRequired,
};
