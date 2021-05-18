import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Skeleton from 'react-loading-skeleton';
import CardCountry from './CardCountry';
import CountryDataService from '../services/country.service';

class CardsBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [
        {
          id: 1,
          localizations: [
            {
              name: 'blank',
              capital: 'blank'
            },
            {
              name: 'blank',
              capital: 'blank'
            },
            {
              name: 'blank',
              capital: 'blank'
            }
          ]
        }
      ],
      dataLoaded: false
    };
  }

  componentDidMount() {
    this.retrieveCountries();
  }

  retrieveCountries() {
    CountryDataService.getAll()
      .then((response) => {
        this.setState({
          countries: response.data,
          dataLoaded: true
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    const { countries, dataLoaded } = this.state;
    const { filterValue, lang } = this.props;

    return (
      <section className="cards-block">
        {countries.map((el, id) =>
          el.localizations[lang].name.toLowerCase().includes(filterValue.toLowerCase()) ||
          el.localizations[lang].capital.toLowerCase().includes(filterValue.toLowerCase()) ? (
            dataLoaded ? (
              <CardCountry
                key={id}
                nameCountry={el.localizations[lang].name}
                capitalCountry={el.localizations[lang].capital}
                id={el._id}
                imgSrc={el.imageUrl}
              />
            ) : (
              Array.from(Array(9).keys()).map((i) => (
                <div key={i} className="card-country">
                  <Skeleton height={200} />
                </div>
              ))
            )
          ) : null
        )}
      </section>
    );
  }
}

CardsBoard.propTypes = {
  filterValue: PropTypes.string.isRequired,
  lang: PropTypes.number.isRequired
};

export default CardsBoard;
