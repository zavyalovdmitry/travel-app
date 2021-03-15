import React, { Component } from 'react';
import CardCountry from './CardCountry';
import PropTypes from 'prop-types';
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
              capital: 'blank',
            },
            {
              name: 'blank',
              capital: 'blank',
            },
            {
              name: 'blank',
              capital: 'blank',
            },
          ]
        },
      ],
    };
  }

  componentDidMount() {
    // console.log(this.state.countries)
    this.retrieveCountries();
    // console.log(this.state.countries)
  }

  retrieveCountries() {
    CountryDataService.getAll()
      .then((response) => {
        this.setState({
          countries: response.data,
        });
        // console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <section className="cards-block">
        { this.state.countries.map((el, id) => (el.localizations[this.props.lang].name.toLowerCase().includes(this.props.filterValue.toLowerCase())
         || el.localizations[this.props.lang].capital.toLowerCase().includes(this.props.filterValue.toLowerCase()) 
            ? <CardCountry
                key={id}
                nameCountry={el.localizations[this.props.lang].name}
                capitalCountry={el.localizations[this.props.lang].capital}
                changeLink={this.props.changeLink}
                id={el._id}
                imgSrc={el.imageUrl}
              /> 
            : null))
        }
      </section>
    );
  }
}

CardsBoard.propTypes = {
  // changeLink: PropTypes.func.isRequired,
  filterValue: PropTypes.string.isRequired,
};

export default CardsBoard;
